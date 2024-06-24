//加载完成后执行
window.addEventListener(
  'load',
  function () {
    //载入动画
    $('#loading-box').attr('class', 'loaded')
    $('#bg').css(
      'cssText',
      'transform: scale(1);filter: blur(0px);transition: ease 1.5s;'
    )
    $('.cover').css('cssText', 'opacity: 1;transition: ease 1.5s;')
    $('#section').css(
      'cssText',
      'transform: scale(1) !important;opacity: 1 !important;filter: blur(0px) !important'
    )
  },
  false
)

// 获取动画
let loader = document.querySelector(".spinner");
// 加载完成事件
window.loader = function() {
	// 加载完成，隐藏动画，显示内容
	loader.style.display = "none";
}