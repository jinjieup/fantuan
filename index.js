 function resize() {
  document.getElementById("frame3d").style.height =
    document.body.clientHeight-15 + "px";

}
window.onresize = resize