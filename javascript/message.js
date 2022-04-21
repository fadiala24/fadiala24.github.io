function removeItems() {
    document.getElementById('first_name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('sub').value = '';
    document.getElementById('textarea1').value = '';
}

var btn = document.getElementById('btn');
btn.addEventListener('click', function (e) {
    e.preventDefault()
    var first_name = document.getElementById('first_name').value;
    var email = document.getElementById('email').value;
    var sub = document.getElementById('sub').value;
    var textarea1 = document.getElementById('textarea1').value;
    var body = '' + first_name + '<br>' + email + '<br>' +
        sub + '<br>' + textarea1;


    email.send({
        Host: "smtp.gmail.com",
        Username: "fadialasidibe9@gmail.com",
        Password: "nlzouxwddpebsazs",
        To: 'fadialasidibe9@gmail.com',
        From: email,
        Subject: sub,
        Body: body,
    }).then(
        textarea1 => alert("Message envoyer")
    );
    
    removeItems();
})