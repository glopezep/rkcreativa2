import $ from 'jquery'

let $serviceHeader = $('.Service-header')

$serviceHeader.on('click', function (e) {
  let $this = this
  let $serviceBody = $($this.nextElementSibling)

  $serviceBody.toggleClass('active')
})

export default $serviceHeader
