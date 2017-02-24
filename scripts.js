document.addEventListener('DOMContentLoaded', function() {
//create button
var btn = document.createElement("button");
//create text on button
var text = document.createTextNode("click here");

// var allDie = [];
//create global counter to count squares on the page
var counter = 0;

//added click event
btn.addEventListener('click', addSquare);
//styled button
btn.style.margin = '20px';
btn.style.display = 'inline';
//append text to button
btn.appendChild(text);
//append button to page
document.body.appendChild(btn);

//adding square
function addSquare() {
    //creating square
    var square = document.createElement('div');
    //give square a class
    square.className = "allSquares";
    square.id = counter;

    //style square
    square.style.backgroundColor = 'black';
    square.style.height = '50px';
    square.style.width = '50px';
    square.style.display = "inline-block";
    square.style.margin = '10px';
    square.style.textAlign = 'center';
    square.style.lineHeight = '50px';

    //increase counter everytime you addSquare
    square.innerHTML = counter;
      counter++;

    //assign counter as the id so number appears
    

    //event listeners for every square
    square.addEventListener('click', getRandomColor);
    square.addEventListener('mouseover', displayNumber);
    square.addEventListener('mouseout', removeNumber);
    square.addEventListener('dblclick', function () {
        if (square.id % 2 == 0) {
            var next = square.nextSibling;
            if (next == null || next.tagName.toLowerCase() !== 'div') {
                alert("Not an element");
            } else {
                next.remove();
            }
    } else {
            var prev = square.previousSibling;
            if (prev == null) {
                alert("Not an element");
            } else {
                prev.remove();
            }
    }
});

    // event listener for doubleclick to run function for alert
    // square.addEventListener('dblclick', messageMe);
    //put the square on the page
    document.body.appendChild(square);


    function getRandomColor() {
        //generate random color
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        //make random color background
        square.style.backgroundColor = color;
    }

    function displayNumber() {
        square.style.color = 'white';
    }

    function removeNumber() {
        square.style.color = 'transparent';
    }

    


    // function messageMe() {
    //     if (square.nextSibling == undefined)
    //         alert('This element does not exist');
    //     if (square.previousSibling == undefined)
    //         alert('This element does not exist');
    // }

}

});





    