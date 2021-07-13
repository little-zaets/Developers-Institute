//Move the box from left to right
//Tip: use setInterval

function myMove() {
  let box = document.getElementById("animate");   
  let position = 0;
  let id = setInterval(frame, 6);
  function frame() {
    if (position == 350) {
      clearInterval(id);
    } else {
      position++; 
      box.style.left = position + 'px'; 
    }
  }
}

//Exercise 2: Drag and Drop
//Create a draggable square/box element in your HTML file.
const dragItem = document.getElementById("p1");
const dropArea = document.getElementById("drop-area");
dragItem.setAttribute('draggable', 'true');

//In your javascript file add the functionality which will allow you to drag the square/box and drop it into a larger box.
dragItem.addEventListener("dragstart", dragStart);
dragItem.addEventListener("dragend", dragEnd);
dropArea.addEventListener("dragover", dragOver);
dropArea.addEventListener("dragenter", dragEnter);
dropArea.addEventListener("dragleave", dragLeave);
dropArea.addEventListener("drop", dragDrop);

function dragStart() {
	this.className += " hold";
	setTimeout(() => this.className = "invisible", 0);
	// event.dataTransfer.setData("")
} 

function dragEnd() {
	this.className = "p1";
}

function dragOver(e) {
	e.preventDefault();
}

function dragEnter(e) {
	e.preventDefault();
}

function dragLeave() {
	this.className = "drop-area";
}

function dragDrop() {
	this.className = "drop-area";
	this.append(dragItem);
}