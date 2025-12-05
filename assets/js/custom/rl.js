const BANNER_WIDTH = 960
const BANNER_HEIGHT = 557

const resizeBanner = () => {
  const banner = $('#banner')
  const currentWidth = banner.innerWidth()
  const currentHeight = currentWidth * (BANNER_HEIGHT / BANNER_WIDTH)
  banner.height(currentHeight)
}

$(document).ready(() => {
  resizeBanner()

  // disable the entry area until the form works
  $('input, textarea').attr('disabled', 'disabled')
})

$(window).on('resize', resizeBanner)
