document.getElementById('submitForm3').addEventListener('click', function () {
    var name = document.getElementById('name3').value;
    var surname = document.getElementById('surname3').value;
    var phone = document.getElementById('phone3').value;
    var email = document.getElementById('email3').value;
    
    console.log("Имя:", name);
    console.log("Фамилия:", surname);
    console.log("Телефон:", phone);
    console.log("Email:", email);

    // Закрытие модального окна после отправки
    $('#modal3').modal('hide');
});