import { test, expect, type Page } from '@playwright/test';

// The hero photo replaced the old "Featured Projects" slideshow. These tests guard the two
// layout regressions we just fixed:
//   1. the text panel and photo must never overlap (was -80px at 1280-1535px)
//   2. the space between them must stay a tidy gap, not runaway slack (was 128px at 1536px)
// plus the basics: the photo and calls-to-action render, and the page loads clean.

const THEME_KEY = 'robert-portfolio-theme';

// Widths that previously produced overlap (1280-1440) or excess slack (1536+), plus the
// small-desktop and ultra-wide ends of the range.
const DESKTOP_WIDTHS = [2560, 1920, 1536, 1440, 1366, 1280, 1024];

// Acceptable horizontal space between the headline panel and the photo, in px.
// Below MIN would mean overlap; above MAX would mean the two halves have drifted apart.
const GAP_MIN = 8;
const GAP_MAX = 160;

async function setLightTheme(page: Page) {
  await page.addInitScript(
    ([key]) => window.localStorage.setItem(key, 'light'),
    [THEME_KEY]
  );
}

test.describe('hero', () => {
  test('renders the photo and calls-to-action (dark theme)', async ({ page }) => {
    await page.goto('/');

    const photo = page.locator('.hero-photo');
    await expect(photo).toBeVisible();
    await expect(photo).toHaveAttribute('src', /banner\.jpg$/);

    await expect(page.getByRole('heading', { name: /Robert Lech/ })).toBeVisible();
    await expect(page.getByRole('link', { name: 'View Projects' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Get In Touch' })).toBeVisible();
  });

  test('renders the photo in light theme', async ({ page }) => {
    await setLightTheme(page);
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
    await expect(page.locator('.hero-photo')).toBeVisible();
  });

  test('loads without console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    page.on('pageerror', (err) => errors.push(err.message));

    await page.goto('/');
    await expect(page.locator('.hero-photo')).toBeVisible();
    expect(errors).toEqual([]);
  });

  for (const width of DESKTOP_WIDTHS) {
    test(`text panel and photo keep a tidy gap @ ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto('/');

      const panel = page.locator('.hero-headline-panel');
      const photo = page.locator('.hero-photo-wrap');
      await expect(panel).toBeVisible();
      await expect(photo).toBeVisible();

      const panelBox = (await panel.boundingBox())!;
      const photoBox = (await photo.boundingBox())!;
      const gap = photoBox.x - (panelBox.x + panelBox.width);

      expect(gap, `gap between panel and photo at ${width}px`).toBeGreaterThanOrEqual(GAP_MIN);
      expect(gap, `gap between panel and photo at ${width}px`).toBeLessThanOrEqual(GAP_MAX);
    });
  }
});
