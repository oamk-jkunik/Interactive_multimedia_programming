var can, ctx, help, ctx2, mouseIsDown = 0;
var starPoint;

function init() {
  can = document.getElementById("can");
  ctx = can.getContext("2d");

  can.addEventListener("mousedown", mouseDown);
  can.addEventListener("mouseup", mouseUp);
  can.addEventListener("mousemove", mouseMove);

  help = document.getElementById("help");
  ctx2 = help.getContext("2d");

  help.addEventListener("mousemove", mouseMove);
}

function mouseDown(e) {
  starPoint = mouseXY(can, e);
  mouseIsDown = 1
}

function mouseUp(e) {
  var realMouse = mouseXY(can, e);
  mouseIsDown = 0;
  ctx.beginPath();
  ctx.strokeStyle = '#000000';
  ctx.moveTo(starPoint.x, starPoint.y);
  ctx.lineTo(realMouse.x, realMouse.y);
  ctx.stroke();
  ctx2.clearRect(0, 0, help.width, help.height);
}

function mouseXY(can, e) {
  var rect = can.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top
  }
}

function mouseMove(e) {
  ctx2.clearRect(0, 0, help.width, help.height);
  if(mouseIsDown) {
    ctx2.beginPath();
    ctx2.moveTo(starPoint.x, starPoint.y);
    var realMouse = mouseXY(help, e);
    ctx2.strokeStyle = "#aaaaaa";
    ctx2.lineTo(realMouse.x, realMouse.y);
    ctx2.stroke();
  }
}
