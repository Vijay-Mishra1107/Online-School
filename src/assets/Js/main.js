////////////////////////////////****Js for footer****////////////////////////////////////////////////

function subscribe() {
    var F_Email = document.getElementById('F_Email').value;

    var F_Email_err = document.getElementById('F_Email_err');
    

    if (F_Email == "") {
        F_Email_err.innerText = "* Please fill email input.";
        return 0;
    }
    else {
        F_Email_err.innerText = "";
    }
   

    // Create new FormData Object.
    let form = new FormData();
    // Append all data to FormData Object.

    form.append('F_Email', F_Email);
    

    // create XMLHTTP request object.
    let request = new XMLHttpRequest();
    // Set Connection
    request.open('POST', '#');
    // Send FormData.
    request.send(form);
    // Error handler of request.
    request.onerror = function () {
        alert("Network Error: Because of network issues could not subscribe");
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

///////////////////////////////////****Js for section(Search_Cours)****////////////////////////////////////

function cours() {
    var S_cours = document.getElementById('S_cours').value;

    var S_cours_err = document.getElementById('S_cours_err');
    

    if (S_cours == "") {
        S_cours_err.innerText = "* Please fill cours name input.";
        return 0;
    }
    else {
        S_cours_err.innerText = "";
    }
   

    // Create new FormData Object.
    let form = new FormData();
    // Append all data to FormData Object.

    form.append('S_cours', F_Email);
    

    // create XMLHTTP request object.
    let request = new XMLHttpRequest();
    // Set Connection
    request.open('POST', '#');
    // Send FormData.
    request.send(form);
    // Error handler of request.
    request.onerror = function () {
        alert("Network Error: Because of network issues could not search cours");
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

///////////////////////////////////****Js for section(Search_Cours)****////////////////////////////////////

function search() {
    var N_search = document.getElementById('N_search').value;

    var N_search_err = document.getElementById('N_search_err');
    

    if (N_search == "") {
        N_search_err.innerText = "* Please fill cours name input.";
        return 0;
    }
    else {
        N_search_err.innerText = "";
    }
   

    // Create new FormData Object.
    let form = new FormData();
    // Append all data to FormData Object.

    form.append('N_search', N_search);
    

    // create XMLHTTP request object.
    let request = new XMLHttpRequest();
    // Set Connection
    request.open('POST', '#');
    // Send FormData.
    request.send(form);
    // Error handler of request.
    request.onerror = function () {
        alert("Network Error: Because of network issues could not search cours");
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