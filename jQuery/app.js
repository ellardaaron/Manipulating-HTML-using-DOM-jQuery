1//

var niceMessageButton = document.createElement("button");
niceMessageButton.innerHTML = "Do Something";

var body = document.getElementsByTagName("body")[0];
body.appendChild(niceMessageButton);

niceMessageButton.addEventListener ("click", function() {
    alert("any (nice) message");
  });

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
})

5//


