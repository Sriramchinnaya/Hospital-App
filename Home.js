

window.onload = function () {
    alert("Welcome to  Hospital");
};

function doctorSelected() {
    let doctor = document.getElementById("hr-select").value;

    if (doctor === "") {
        alert("Please select a doctor");
    } else {
        alert("You selected: " + doctor);
    }
}

function busTime() {
    let bus = document.getElementById("bus-time").value;

    if (bus !== "") {
        alert("Selected Bus: " + bus);
    }
}


function bookAppointment() {
    window.location.href = "Appointment.html";
}


function callHospital() {
    window.location.href = "tel:+919876543210";
}