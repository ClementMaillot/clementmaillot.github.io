const apresGuerre = document.querySelector("#apres-guerre");
const annees60 = document.querySelector("#annees60");
const annees80 = document.querySelector("#annees80");


//---------------------------------------------------------------------------------------------------------------------
function Load() {

  var items = document.querySelectorAll(".timeline li");


  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }


  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

}
Load();


//---------------------------------------------------------------------------------------------------------------------

//HELPER
function isElementInViewport(el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }

  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
  );
}