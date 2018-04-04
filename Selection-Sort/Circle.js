//A class Circle to create a circle of radius r and a color
function Circle(r, color) {
  this.r = r;
  this.color = color;
}

//Display each Circle in the list on the canvas
function render(list) {
  let initial = -300;
  for (var i = 0; i < list.length; i++) {
    translate(750 / 2, 550 / 2);
    ellipseMode(CENTER);
    noStroke();
    fill(list[i].color);
    ellipse(initial, 0, list[i].r * 2, list[i].r * 2);
    console.log(list[i].r);
    initial += 55 + list[i].r;
    translate(-750 / 2, -550 / 2);
  }
}