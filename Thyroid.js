document.getElementById("thyroidForm").addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let test = document.getElementById("test").value;

    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = `
        <h3>Patient Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Selected Test:</strong> ${test}</p>
        <p style="color:green;"><strong>Appointment Confirmed!</strong></p>
    `;

});