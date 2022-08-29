// INPUTS
const menuBtn = document.getElementById('menu-btn');
const showMailBox = document.getElementById('show-mail-box');
const calcBtn = document.getElementById('calc-btn');
const resultBox = document.getElementById('result-box');
const load1 = document.getElementById('load1');
const load2 = document.getElementById('load2');
const load3 = document.getElementById('load3');
const load4 = document.getElementById('load4');
const load5 = document.getElementById('load5');
const load6 = document.getElementById('load6');
const load7 = document.getElementById('load7');
const load8 = document.getElementById('load8');
const load9 = document.getElementById('load9');
const load10 = document.getElementById('load10');
const result = document.getElementById('result');

calcBtn.addEventListener('click', abc);
function abc(e) {
    if (load1.value != "" && load2.value != "" && load3.value != "" && load4.value != "" && load5.value != "" && load6.value != "" && load7.value != "" && load8.value != "" && load9.value != "" && load10.value != "") {
        let cbr5 = ((load5.value / 13.426) * 100).toFixed(1);
        let cbr10 = ((load10.value / 20.139) * 100).toFixed(1);
        let cbrvalue;
        if (cbr5 > cbr10) {
            cbrvalue = cbr5;
        } else if (cbr10 > cbr5) {
            cbrvalue = cbr10;
        }
        resultBox.style = "visibility: visible;"
        result.textContent = "The CBR-Value of the specimen is found to be " + cbrvalue + ".";
        console.log(cbrvalue);
    }else {
        alert("Some fields are empty");
    }

}




// Menu Btn
menuBtn.addEventListener('click', showMail);
function showMail(e) {
    showMailBox.style = "display: flex;";
}


