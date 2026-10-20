// Object Demo
// Hyunjin  Wang
// 10/14/2026

// Global variables
let myBook; //can't INIT objects here...
let aBook;
let bBook;
// Challenge One: add and display two more books!
//                one softcover / one hardcover
//
// Challenge Two; fill and array with 5 books
//                use the same title, author for each
//                numeric can be random / pattern


async function setup() {
  createCanvas(windowWidth, windowHeight);
  //create a single book
  myBook = new Book("CS30 TEXT", "Mr.Scott", 1411212312, "leatherbound", 500, width*0.3);
  aBook = new Book("","",1231231323,"hardcover", 12, width/3);
  bBook = new Book("g", "g", 1323232123, "softcover", 10, width/2);

}

function draw() {
  background(220);
  myBook.display();
}

// Classes are nicely organized into the bottom of 
// our file, or perhaps their own files...

class Book{
  //1. contructor
  constructor(title, author, isbn, cover, pages, x){
    this.title = title;
    this. author = author;
    this.isbn = isbn;
    this.cover = cover;
    this.pages = pages;
    this.x= x;
  }
  
  //2. class functions
  // inside a class, we omit the "function" keyword
  display(){
    // render our object on the Canvas 
    rectMode(CENTER);  
    textAlign(CENTER, CENTER);
    textSize(20);

    // set fill color based on coverType (H, S, L)
    switch( this.cover ){
      case "softcover":
        fill(220, 220, 0); break;
      case "hardcover":
        fill(100, 255, 255); break;
      case "leatherbound":
        fill(150, 0, 150); break; 
    }


    // finally draw the book spine
    rect(this.x, height/2, this.pages/10, 150);
    fill(255);
    text(this.title[0], this.x, height/2+50);
    
  }
}