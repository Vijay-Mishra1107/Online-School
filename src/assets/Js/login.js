////////////////////////////****Js-Validation For Login****///////////////////////////////////////////		

function login() {
    var L_Name = document.getElementById('L_Name').value;
    var L_Address = document.getElementById('L_Address').value;
    var L_Password = document.getElementById('L_Password').value;

    var L_Name_err = document.getElementById('L_Name_err');
    var L_Address_err = document.getElementById('L_Address_err');
    var L_Password_err = document.getElementById('L_Password_err');


    if (L_Name == "") {
        L_Name_err.innerText = "* Please fill project name input.";
        return 0;
    }
    else {
        L_Name_err.innerText = "";
    }
    if (L_Address == "") {
        L_Address_err.innerText = "* Please fill email pddress input.";
        return 0;
    }
    else {
        L_Address_err.innerText = "";
    }
    if (L_Password == "") {
        L_Password_err.innerText = "* Please fill password input.";
        return 0;
    }
    else {
        L_Password_err.innerText = "";
    }

    // Create new FormData Object.
    let form = new FormData();
    // Append all data to FormData Object.

    form.append('L_Name', L_Name);
    form.append('L_Address', L_Address);
    form.append('L_Password', L_Password);

    // create XMLHTTP request object.
    let request = new XMLHttpRequest();
    // Set Connection
    request.open('POST', '#');
    // Send FormData.
    request.send(form);
    // Error handler of request.
    request.onerror = function () {
        alert("Network Error: Because of network issues could not login");
    };
    // Output of request.
    request.onload = function () {
        if (request.readyState === request.DONE) {
            if (request.status === 200) {
                //                data = JSON.parse(request.response)
                console.log("respond : " + request.response);
            }
        }
        else {
            var alert = document.createElement("DIV");
            alert.id = 'alert-child';
            alert.classList.add('alert');
            alert.classList.add('alert-danger');
            alert.classList.add('font-weight-bold');
            alert.innerText = "Data Submission failed !!! Please try again !!! ";
            var universal_alert = document.getElementById('universal_alert');
            universal_alert.appendChild(alert);
            console.log(request.status);
            console.log(request.statusText);
        }
    }
}
function removeChild() {
    var universal_alert = document.getElementById('universal_alert');
    var alert = document.getElementById('alert-child');
    universal_alert.removeChild(alert);
}