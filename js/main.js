// variables always go at the top -> this is step 1
// these are the connections that you're making to elements on the page 
// use CSS selectors to make connections to elements with JavaScript

// create a 1 to 1 connection with a variable -> querySelector("queryString")
// let theButton = document.querySelector("#buttonOne");

// create a 1 to many connection with a variable -> querySelectorAll("queryString")
let theButtons = document.querySelectorAll("#buttonHolder img"),
	theHeading = document.querySelector("#headLine h1"),
	puzzleBoard = document.querySelector(".puzzle-board"),
	puzzlePieces = document.querySelectorAll(".puzzle-pieces img"),
	dropZones = document.querySelectorAll('.drop-zone'),
	// store the dragged piece in a global variable
	// because we need it in the handleDrop function
	draggedPiece;

// step 3
// functionality always goes in the middle -> how do we want
// the app to behave?

function resetDropZones() {
    dropZones.forEach(dropZone => {
        // Remove all child elements (puzzle pieces) from the drop zone
        dropZone.innerHTML = '';
    });
}
// still gets rid of puzzle pieces instead of returning them
function changeBGImage() {
	resetDropZones();
	
	//const dropZones = e.currentTarget;

	//if (dropZones.children.length > 0) {
        // Remove all child elements from the drop zone
   //     dropZones.innerHTML = '';
   // }


	//dropZones.forEach(puzzlePieces => {
	//	if (puzzlePieces){
	//		puzzleBoard.appendChild(puzzlePieces)
	//	}
   // });

	//if (puzzleBoard.contains("puzzlePieces")) {
	//	puzzlePiece.appendChild();
	//}

	// the `` is a JavaScript template string. It tells the JS enging to evaluate the expression
	// inside the braces - run that little bit of code. In this case it's just pulling the ID of the
	// button we clicked on and putting it at the end of the image name (0, 1, 2, 3)
	// and updating the background-image style of the puzzle board element.

	//function resetPuzzlePieces() {
		// Loop through each puzzle piece and remove it from the drop zone
		///puzzlePieces.forEach(piece => {
		
			//if (piece.parentNode.classList.contains('drop-zone')) {
				// If the puzzle piece is in a drop zone, remove it from the drop zone
			//	puzzleBoard.appendChild(piece);
		//	}
	//	});
	//}
	
	//function changeBGImage() {
		// Call resetPuzzlePieces to reset puzzle pieces to default position
		//resetPuzzlePieces();	
	

	
	//function resetPuzzlePieces(){

		//puzzlePieces.forEach(function(piece) {
		//	piece.style.backgroundImage = '';
		//});
		//}
		//resetPuzzlePieces();
		
	//need to check drop zones for pieces using a foreach loop, then use a return to reset peices 
	//need an append child to put the pieces back
	// if theButtons and  puzzlesPieces are on the puzzleboard, return puzzle pieces
	//if theButton reset puzzlePieces
	// possibly need to use e.currentTarget
	// bug fix #2 should go here. it's at most 3 lines of JS code. 
	puzzleBoard.style.backgroundImage = `url(images/backGround${this.id}.jpg)`;
	

}

function handleStartDrag() { 
	console.log('started dragging this piece:', this);
	// store a reference to the puzzle piece image that we're dragging
	// so we can use it later and move it to a drop zone
	draggedPiece = this;
}

function handleDragOver(e) { 
	e.preventDefault(); // e is shorthand for event
	// this overrides the default dragover behaviour
	console.log('dragged over me'); 
}

function handleDrop(e) { 
	e.preventDefault();
	console.log('dropped something on me');

	if (this.firstElementChild) {
		console.log('Drop zone already contains a child element. Cannot drop another element.');
        return;
	}

	
	//let hasPiece = false;

	//if (!hasPiece) {
	//	console.log('dropped something on me');
	

	//hasPiece= true;
	//} else {
	//	console.log('There is already a piece in this drop zone. Cannot drop another piece.');
	//}
	
	//let handleDropCount = 0;
	 
	//if (handleDropCount >= 1) {
	//console.log('dropped something on me');
	//} else {
	//	console.log("drop zone already contains a puzzle piece")
	//}


	//if (dropZones.childElementCount=== 1){
	//	dropZones.appendChild(puzzlePieces);

	//} else {
	//	console.log ("there is already a puzzle piece here");
	//}
	// bug fix #1 should go here, and it's at most 3 lines of JS code
	//only one child element can be allowed in the dropzone, you need to be able to check if there is already an element in the drop zone, if there is, dont allow another element.

	// this line is going to move the dragged piece from the left side of the board
	// into whatever drop zone we choose. appendChild means "add element to the container"
	this.appendChild(draggedPiece);
}
// step 2
// event handling always goes at the bottom => 
// how do we want users to interact with our app

// 1 to 1 event handling
//theButton.addEventListener("click", changeBGImage);

// 1 to many event handling
// add event handling to each button in the collection of buttons, one at a time
theButtons.forEach(button => button.addEventListener("click", changeBGImage));

// add the drag event handling to the puzzle pieces
puzzlePieces.forEach(piece => piece.addEventListener("dragstart", handleStartDrag));

// add the dragover AND the drop event handling to the drop zones
dropZones.forEach(zone => zone.addEventListener("dragover", handleDragOver));

// add the drop event handling
dropZones.forEach(zone => zone.addEventListener("drop", handleDrop));
