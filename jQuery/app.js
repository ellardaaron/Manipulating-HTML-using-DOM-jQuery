1//

let testButton = $('<button>Do Something</button>');
testButton.appendTo('body');
testButton.click(function (){
  alert('any (nice) message')
})

2//

$('#btnSubmit').click(function (e) {
    e.preventDefault();
    var submitValue = $('#textInput').val();
    alert(submitValue);
});

3//

$('#colorChangingDiv').mouseover(function(){
    $('#colorChangingDiv').css('background-color', 'red');
});

$('#colorChangingDiv').mouseout(function(){
    $('#colorChangingDiv').css('background-color', '');
});

4//
 
let paragraphWithSomeText = $('<p>The text held within this paragraph element should change to a random color when clicked</p>')
paragraphWithSomeText.appendTo("body")

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
paragraphWithSomeText.click(function () {
    $(paragraphWithSomeText).css("color", getRandomColor());
});

5//

let myNameButton = $('<button>Display my name</button>');
myNameButton.appendTo('body');

let myNameDiv = $('<div></div>');
myNameDiv.appendTo('body');



myNameButton.click(function(){
  let myNameSpan = $('<span>Aaron Ellard</span>');
  $(myNameDiv).append(myNameSpan)
});

6//

let friendCounter = 0;

var friendNames = ["Katherine", "Ryan", "The Ryan who stands in the back of class", "Jillian", "Sophia", "Torin", "Terrance", "Michala", "Anthony", "Amber"];
 
$('#friendButton').click(function(){
  if(friendCounter <= friendNames.length - 1) {
    let listItem = $('<li></li>');
    let friendName = $(friendsNames[friendCounter]);
    $(listItem).append(friendName);
    $('#friendList').append(listItem);
    friendCounter++
  }
})

$('friendButton').click(function(){
  let randomIndex = Math.floor(Math.random() * 10);
  let friend = f
})

//--------------------------

  


