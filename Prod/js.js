setInterval(() => 
{

    let date = new Date
    let jour = date.getDate()
    let heure = date.getHours()
    let minute = date.getMinutes()
    let mois = date.getMonth()

    switch (mois) 
    {
        case 1:
            moisl = "Janvier";
            break;
        case 2:
            moisL = "Février";
            break;
        case 3:
            moisL = "Mars";
            break;
        case 4:
            moisL = "Avril";
            break;
        case 5:
            moisL = "Mai";
            break;
        case 6:
            moisL = "Juin";
            break;
        case 7:
            moisL = "Juillet";
            break;
        case 8:
            moisL = "Août";
            break;
        case 9:
            moisL = "Septembre";
            break;
        case 10:
            moisL = "Octobre";
            break;
        case 11:
            moisL = "Novembre";
            break;
        case 12:
            moisL = "Décembre";
            break;
        default:
            moisL = "Mois invalide";
            break;
    }

    let chrono = heure + "h " + minute + "m - " + jour + " " + moisL

    var element = document.getElementById("chrono");
    element.innerHTML = chrono;
        
}, 500);

document.title = "Plate or Flat"

// alert("Tu vas apprendre la vérité")


// Panier

let oui = 0;
let nbrGuide = 0;
let nbrTee = 0;

let Tee = document.getElementById("tee")

// setInterval(() => 
// {

//     if (nbrTee = 0)
//     {
//         Tee.innerHTML = "fds"
//     }
//     else
//     {
//         Tee.innerHTML = <td>Teeee-Shirt</td> <td>25</td> <td id="nbrTee">0</td>
//     }

// }, 1000);

let adda = () => {


    addcart(25)
    nbrTee +=1
    document.getElementById("nbrTee").innerHTML= nbrTee
}

let addb = () => {

    addcart(15)
    nbrGuide +=1
    document.getElementById("nbrGuide").innerHTML= nbrGuide

}



let suppa = () => {

    if (nbrTee > 0)
    {
        suppcart(25)
        nbrTee -=1
        document.getElementById("nbrTee").innerHTML= nbrTee
    }

}

let suppb = () => {

    if(nbrGuide > 0)
    {
        suppcart(15)
        nbrGuide -=1
        document.getElementById("nbrGuide").innerHTML= nbrGuide
    }

}




let addcart = (price) => {
    oui += price;

    document.getElementById("total").innerHTML= oui
}

let suppcart = (price) => {
    oui -= price;

    document.getElementById("total").innerHTML= oui
}


