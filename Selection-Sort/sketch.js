//Global Variables
var canvas, newcircles, circles = [];
var colors = [];

//The Setup Function runs once
function setup() {
  setTitle("Insertion Sort"); // Title of the gist
  canvas = createCanvas(750, 550); //  Create the canvas
  canvas.position(100, 80); // position the createCanvas

  //Create 8 circles with random radius
  for (let i = 0; i < 8; i++) {
    var radius = random(10, 40); //seed a random rardius
    var randomColor = color(floor(random(0, 255)), floor(random(0, 255)), floor(random(0, 255))); //seed a random color
    let newCircle = new Circle(radius, randomColor); // create a new Circle from the Circle Class
    circles.push(newCircle); // add the circle to the list
  }

  //Menu and Information
  console.log("This is a GUI to show Insertion Sort!");
  console.log("The Circles are aligned in a line.")
  console.log("Click to sort them based on their radius.\n###########################################\n\n");
}


//draw function
function draw() {
  background(255); //set the white background
  console.log("Current Radii:"); //[DEBUG] Random initialised radii
  render(circles); //display the list of circles
  console.log("\n\n");
  noLoop(); //stop the draw function
}


//On mouse Pressed
function mousePressed() {
  newcircles = insertionSort(circles); //sort the current list of circles
  // console.log(newcircles);
  background(255); //set the background
  console.log("Sorted Radii:"); //[DEBUG] Sorted Radii
  render(newcircles); //display the sorted list of circles
}