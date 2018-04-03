document.addEventListener("DOMContentLoaded", function () {
    runProgram();
});

async function runProgram() {

    let selected;
    let selectedID;
    let color;
    let active;
    let infoboks;
    //1. load svg map //

    let mySvg = await fetch("costumer_jouney_open.svg");
    let svg = await mySvg.text();

    document.querySelector("#map").innerHTML = svg;

    //2. finde infobokse og skjul dem //

    let info_1 = document.querySelector("#map #info1");
    let info_2 = document.querySelector("#map #info2");
    let info_3 = document.querySelector("#map #info3");
    let info_4 = document.querySelector("#map #info4");
    let info_5 = document.querySelector("#map #info5");
    let info_6 = document.querySelector("#map #info6");
    let info_7 = document.querySelector("#map #info7");
    let info_8 = document.querySelector("#map #info8");
    let info_9 = document.querySelector("#map #info9");
    let info_10 = document.querySelector("#map #info10");

    info_1.style.visibility = "hidden";
    info_2.style.visibility = "hidden";
    info_3.style.visibility = "hidden";
    info_4.style.visibility = "hidden";
    info_5.style.visibility = "hidden";
    info_6.style.visibility = "hidden";
    info_7.style.visibility = "hidden";
    info_8.style.visibility = "hidden";
    info_9.style.visibility = "hidden";
    info_10.style.visibility = "hidden";
    //3. skift farve ved klik, og vis tekst //
    document.querySelector("#map #prikkerne").addEventListener("mouseover", function (evt) {
        clicked(evt);
    })

    //funktion clicked//

    function clicked(obj) {
        if (infoboks != undefined) {
            infoboks.style.visibility = "hidden";
        }
        // a. find det klikkede element//
        selected = obj.target;

        //b. find det klikkede elements ID//
        selectedID = selected.getAttribute("id");

        //c. find det klikkede elemnts fillfarve//
        color = selected.getAttribute("fill");
        console.log(color);

        //d. vis infobokse//
        if (selectedID === "prik1") {
            info_1.style.visibility = "visible";
            infoboks = info_1;
        }
        if (selectedID === "prik2") {
            info_2.style.visibility = "visible";
            infoboks = info_2;
        }

        if (selectedID === "prik3") {
            info_3.style.visibility = "visible";
            infoboks = info_3;
        }

        if (selectedID === "prik4") {
            info_4.style.visibility = "visible";
            infoboks = info_4;
        }

        if (selectedID === "prik5") {
            info_5.style.visibility = "visible";
            infoboks = info_5;
        }
        if (selectedID === "prik6") {
            info_6.style.visibility = "visible";
            infoboks = info_6;
        }
        if (selectedID === "prik7") {
            info_7.style.visibility = "visible";
            infoboks = info_7;
        }
        if (selectedID === "prik8") {
            info_8.style.visibility = "visible";
            infoboks = info_8;
        }
        if (selectedID === "prik9") {
            info_9.style.visibility = "visible";
            infoboks = info_9;
        }
        if (selectedID === "prik10") {
            info_10.style.visibility = "visible";
            infoboks = info_10;
        }


        //4. hvis der tidligere har været klikket på forige element skift farve til orginal //
        if (active != undefined) {
            active.setAttribute("fill", color);
        }
        //gør det klikkede til det aktive//
        active = selected;


        //skifte farve på det valgte//
        if (color === "null") {
            document.querySelector("#" + selectedID).setAttribute("fill", "#00B9EA");
        } else {
            document.querySelector("#" + selectedID).setAttribute("fill", "#00B9EA");
            infoboks.style.visibility = "hidden";
        }
    }
};
