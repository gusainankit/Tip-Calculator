let calculate = document.getElementById('btn');
calculate.addEventListener('click', function () {
    // enteramount
    let amount = document.getElementById('name').value;
    // percent
    let servicePer = document.getElementById('services').value;
    let totalAmount = parseInt(servicePer) / 100 * parseInt(amount);
    // per person
    let person = document.getElementById('people').value;
    let eachPerson = parseInt(totalAmount) / person;
    // print
    document.getElementById('tip').value = eachPerson;

})