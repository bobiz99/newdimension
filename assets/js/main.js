window.onload = function(){
    imageSlider();
    document.getElementById("modalBoxContact").addEventListener("click",openModalBox);
    document.getElementById("btnCloseModalBox").addEventListener("click",closeModalBox);
    //document.getElementById("modalBoxBlur").addEventListener("click",closeModalBox);
}

//JQUERY
$(document).ready(function(){
    $("#bars").click(function(){
        $("#menu").addClass("menu--on");
    })
    $("#leftArrow").click(function(){
        $("#menu").removeClass("menu--on");
    })
    $("#menu").mouseleave(function(){
        $("#menu").removeClass("menu--on");
    })
})

//SLIDER
var i = 0;
var nizSlika = ["sliderSlika1Edit", "sliderSlika2Edit", "sliderSlika3Edit"];

function imageSlider(){
    document.getElementById("slider").style.backgroundImage = "url('D:/ICT/SajtWebProg1/assets/images/"+nizSlika[i]+".jpg')";

    if(i < nizSlika.length-1){
        i++;
    }
    else{
        i=0;
    }

    setTimeout("imageSlider()", 2500);
}


//OTVARANJE I ZATVARANJE FORM MODAL BOXA
function openModalBox(){
    document.getElementById("modalBoxBlur").style.display="block";
    document.body.classList.add("stop-scrolling");
}

function closeModalBox(){
    document.getElementById("modalBoxBlur").style.display="none";
    document.body.classList.remove("stop-scrolling");
}

//ISPIS DATUMA

    //Ispis Godina
var nizGodina = [];
for(let i=2019;i>1929;i--){
    nizGodina.push(i);
}

var godineIspis = "<select id='godina'>";
godineIspis += "<option>Year</option>";
for (let i in nizGodina) {
    godineIspis += "<option>"+nizGodina[i]+"</option>";
}
godineIspis += "</select>";
document.getElementById("ddlYear").innerHTML = godineIspis;

    //Ispis meseci
var nizMeseca = [];
for(let i = 12; i>0;i--){
    nizMeseca.push(i);
}

var meseciIspis = "<select id='mesec'>";
meseciIspis += "<option>Month</option>";
for (let i in nizMeseca) {
    meseciIspis += "<option>"+nizMeseca[i]+"</option>";
}
meseciIspis += "</select>";
document.getElementById("ddlMonth").innerHTML = meseciIspis;

    //Ispis dana
 var nizDana = [];
for(let i = 31; i>0;i--){
    nizDana.push(i);
}
var daniIspis = "<select id='dan'>";
daniIspis += "<option>Day</option>";
    for (let i in nizDana) {
        daniIspis += "<option>"+nizDana[i]+"</option>";
    }
    daniIspis += "</select>";
    document.getElementById("ddlDay").innerHTML = daniIspis;


//REGULARNI IZRAZI

document.getElementById("submitForme").addEventListener("click",function(){
    //dohvatanje vrednosti iz forme
    var ime =   document.getElementById("firstName").value.trim();
    var prezime = document.getElementById("lastName").value.trim();
    var email = document.getElementById("email").value.trim();
    var confirmEmail = document.getElementById("emailConfirm").value.trim();
    var godine = document.getElementById("godina").value;
    var meseci = document.getElementById("mesec").value;
    var dani = document.getElementById("dan").value;
    var pol = document.getElementsByName("Pol");

    //dohvatanje divova za erore
    var imeGreska = document.getElementById("firstNameError");
    var prezimeGreska = document.getElementById("lastNameError");
    var emailGreska = document.getElementById("emailError");
    var confirmEmailGreska = document.getElementById("emailConfirmError");
    var godineGreska = document.getElementById("godineError");
    var meseciGreska = document.getElementById("meseciError");
    var daniGreska = document.getElementById("daniError");
    var polGreska = document.getElementById("radioButtonError");

    //regex

    var regexIme = /^[A-Z][a-z]{2,15}$/;
    var regexPrezime = /^[A-Z][a-z]{2,15}$/;
    var regexEmail = /^[a-z]+[\.\-\_\!a-z\d]*\@[a-z]{2,10}(\.[a-z]{2,3}){1,2}$/;
    var regexConfirmEmail = /^[a-z]+[\.\-\_\!a-z\d]*\@[a-z]{2,10}(\.[a-z]{2,3}){1,2}$/;

    //PROVERA
    //ime
    if(ime==""){
        imeGreska.innerHTML = "This field is required!";
        document.getElementById("firstName").style.borderBottom = "3px solid red";
    }
    else if(!regexIme.test(ime)){
        imeGreska.innerHTML = "Enter valid name!";
        document.getElementById("firstName").style.borderBottom = "3px solid red";
    }else{
        imeGreska.innerHTML = "";
        document.getElementById("firstName").style.borderBottom = "3px solid green";
    }

    //prezime
    if(prezime==""){
        prezimeGreska.innerHTML = "This field is required!";
        document.getElementById("lastName").style.borderBottom = "3px solid red";
    }
    else if(!regexPrezime.test(prezime)){
        prezimeGreska.innerHTML = "Enter valid lastname!";
        document.getElementById("lastName").style.borderBottom = "3px solid red";
    }else{
        prezimeGreska.innerHTML = "";
        document.getElementById("lastName").style.borderBottom = "3px solid green";
    }

    //email
    if(email==""){
        emailGreska.innerHTML = "This field is required!";
        document.getElementById("email").style.borderBottom = "3px solid red";
    }
    else if(!regexEmail.test(email)){
        emailGreska.innerHTML = "Enter valid e-mail!";
        document.getElementById("email").style.borderBottom = "3px solid red";
    }else{
        emailGreska.innerHTML = "";
        document.getElementById("email").style.borderBottom = "3px solid green";
    }

    //confirmEmail
    if(confirmEmail==""){
        confirmEmailGreska.innerHTML = "This field is required!";
        document.getElementById("emailConfirm").style.borderBottom = "3px solid red";
    }
    else if(email!=confirmEmail){
        confirmEmailGreska.innerHTML = "Please confirm with correct e-mail!";
        document.getElementById("emailConfirm").style.borderBottom = "3px solid red";
    }
    else{
        confirmEmailGreska.innerHTML = "";
        document.getElementById("emailConfirm").style.borderBottom = "3px solid green";
    }

    //godine
    if(godine == "Year") {
        godineGreska.classList.add("showError");
    } else {
        godineGreska.classList.remove("showError");
        console.log("Izabrana godina");
    }
    //meseci
    if(meseci == "Month") {
        meseciGreska.classList.add("showError");
    } else {
        meseciGreska.classList.remove("showError");
        console.log("Izabran mesec");
    }

    //dani
    if(dani == "Day") {
        daniGreska.classList.add("showError");
    } else {
        daniGreska.classList.remove("showError");
        console.log("Izabran dan");
    }

    //POL
    let isValidPol = false;

    for(let i=0; i< pol.length; i++){
        if(pol[i].checked){
            isValidPol = true;
            break;
        }
    }

    if(!isValidPol){
        polGreska.innerHTML = "Please choose gender!";
    }
    else {
        polGreska.innerHTML = "";
        console.log("Izabran pol");
    }

})

