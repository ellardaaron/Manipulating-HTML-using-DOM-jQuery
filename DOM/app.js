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
})


