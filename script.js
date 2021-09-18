var rate = 0.5;

function compute() {
    principal = document.getElementById("principal").value;
    
    if (principal == null || principal == 0) {
        alert("Please Enter Value Greater than 0");
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
    result.innerHTML = "If you deposit" + "&nbsp;" + (principal) + "," + "<br/>" + "at an interest rate of" + "&nbsp;" + (rate) + "." + "<br/>" +
        "You will receive an amount of" + "&nbsp;" + (principal * rate * year / 100) + "," + "<br/>" +
        "in the year" + "&nbsp;" + (result2);
}

function rateChange(value) {
   rate =  value;
   rateId = document.getElementById("rateId");
   rateId.innerHTML = ""+value;
   console.log(""+value);
}