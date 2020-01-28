document.addEventListener("DOMContentLoaded", function () {
    //1

    let button = document.createElement('button');
    let btnText = document.createTextNode('This is a Button');
    button.appendChild(btnText);
    document.body.appendChild(button);

    button.addEventListener("click", function () {
        alert('any (nice) message')
    });

    //2

    document.getElementById("btnSubmit").addEventListener("click", function (e) {
        e.preventDefault();
        var submitValue = document.getElementById("textInput").value;
        alert(submitValue);
    });

    //3

    let mouseOverDiv = document.getElementById('mouseOverDiv');
    mouseOverDiv.addEventListener("mouseover", function () {
        this.style.backgroundColor = "green";
    })
    mouseOverDiv.addEventListener("mouseout", function () {
        this.style.backgroundColor = "";
    })

    //4

    let paragraph = document.createElement('p');
    let text = document.createTextNode('This paragraph should should change text color when clicked.')
    paragraph.appendChild(text);
    document.body.appendChild(paragraph);

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    paragraph.addEventListener("click", function () {
        this.style.color = getRandomColor();
    })

    //5

    let nameButton = document.createElement('button');
    let nameButtonText = document.createTextNode('This Button adds my name as a span to a div');
    nameButton.appendChild(nameButtonText);
    document.body.appendChild(nameButton);

    let nameDiv = document.createElement('div');
    document.body.appendChild(nameDiv);

    nameButton.addEventListener("click", function() {
        let span = document.createElement("span");
        let spanText = document.createTextNode ("Aaron Ellard");
        span.appendChild(spanText);
        nameDiv.appendChild(span);
    })

    //6

    let friendButton = document.createElement('button');
    let friendButtonText = document.createTextNode('This button adds friends to an unordered list from an array');
    let friendCounter = 0;
    friendButton.appendChild(friendButtonText);
    document.body.appendChild(friendButton);

    let friendList = document.createElement('ul');
    document.body.appendChild(friendList);

    var friendNames = ["Katherine", "Ryan", "The Ryan who stands in the back of class", "Jillian", "Sophia", "Torin", "Terrance", "Michala", "Anthony", "Amber"];
 
    friendButton.addEventListener("click", function(){
        if(friendCounter <= friendNames.length - 1) {
            let listItem = document.createElement("li");
            let friendName = document.createTextNode(friendNames[friendCounter]);
            listItem.appendChild(friendName);
            friendList.appendChild(listItem);
            friendCounter++
        }
    })
})
