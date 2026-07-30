let token = Number(localStorage.getItem("lastToken")) || 1000;

let patients = JSON.parse(localStorage.getItem("patients")) || [];

display();

function generateToken(){

    let name = document.getElementById("patientName").value;

    let dept = document.getElementById("department").value;

    if(name==""){
        alert("Enter patient name");
        return;
    }

    token++;

    let patient={
        token:token,
        name:name,
        dept:dept
    };

    patients.push(patient);

    localStorage.setItem("patients",JSON.stringify(patients));
    localStorage.setItem("lastToken",token);

    document.getElementById("currentToken").innerHTML =
        "Current Token : " + token;

    document.getElementById("patientName").value="";

    display();
}

function display(){

    let table=document.getElementById("tokenTable");

    table.innerHTML="";

    patients.forEach((p,index)=>{

        table.innerHTML+=`
        <tr>
            <td>${p.token}</td>
            <td>${p.name}</td>
            <td>${p.dept}</td>
            <td>
                <button onclick="complete(${index})">
                    Complete
                </button>
            </td>
        </tr>`;
    });
}

function complete(index){

    patients.splice(index,1);

    localStorage.setItem("patients",
    JSON.stringify(patients));

    display();
}