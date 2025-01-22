let table;
let topsongs;

function preload(){
  table = loadTable ('billboard.csv', 'csv', 'header');
}

function setup() {
  createCanvas(600, 600);
  
  topsongs = table.getRows();
  
  console.log(table);
  noLoop();
}

function draw() {
  background(0);
  
   let rank = table.getColumn("Rank");
  let singer = table.getColumn("Singer");
  let title = table.getColumn("Song Name");
  

  
  let numRos = table.getRowCount();

  for (let i = 1; i < numRos; i++) {
    let xPos = random(width);
    let yPos = random(height);
    //with each name, create a circle

    let circleSize = map(rank[i], 1, 10, 30, 200);
    strokeWeight(2);

    
    strokeWeight(2);

    
    let c = title[i];
    fill("rgba(128,0,128,0)");
    stroke("purple");
    circle(xPos, yPos, circleSize);
    fill(255);
    
    console.log(singer[i]);
  }
  
  console.log(singer);
}