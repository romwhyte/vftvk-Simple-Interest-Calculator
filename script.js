var rate = 0.5;

function compute() {
    principal = document.getElementById("principal").value;
    
    if (principal == null || principal <= 0) {
        alert("Please Enter Value Greater than 0");
        document.getElementById("principal").focus();
        return false;
    }

    
    resultdoc = document.getElementById("displayResult");
    resultdoc.style.visibility = "visible";
    year = document.getElementById('yearId').value;
    result = document.getElementById('result');

    /* calcul du nombre d'année*/
    var today = new Date();
    var annee = today.getFullYear();
    var result1 = ((annee = +year));
    var today2 = new Date();
    var annee2 = today2.getFullYear();
    var result2 = result1 + annee2

    /* calul et affichage de l'intérêt*/
    result.innerHTML = "If you deposit " + "&nbsp;<span class='highlight'>" + (principal) + "</span>," + "<br/>" + "at an interest rate of" + "&nbsp;<span class='highlight'>" + (rate) + "</span>." + "<br/>" +
        "You will receive an amount of" + "&nbsp;<span class='highlight'>" + (principal * rate * year / 100) + "</span>," + "<br/>" +
        "in the year" + "&nbsp;<span class='highlight'>" + (result2) + "</span>";
}

function rateChange(value) {
   rate =  value;
   rateId = document.getElementById("rateId");
   rateId.innerHTML = ""+value;
   console.log(""+value);
}