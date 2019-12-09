window.onload = function(){
    imageSlider();
    document.getElementById("btnArchitects").addEventListener("click",showArchitects);
    document.getElementById("btnDesigners").addEventListener("click",showDesigners);

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

    //ISPIS SLIKA
var nizSlikaZaGaleriju=[
    {
        putanjaSlike: "assets/images/project1Edit.jpg",
        altSlike: "Project1"
    },
    {
        putanjaSlike: "assets/images/project2Edit.jpg",
        altSlike: "Project2"
    },
    {
        putanjaSlike: "assets/images/project3Edit.jpg",
        altSlike: "Project3"
    },
    {
        putanjaSlike: "assets/images/project4Edit.jpg",
        altSlike: "Project4"
    }
];

var ispisSlika = "";
var divGalerije = document.getElementById("mestoZaIspisSlika");
nizSlikaZaGaleriju.forEach(function(slika){
    ispisSlika += `<div class="col-lg-3 col-md-6 pl-0 pr-0">
    <img src="${slika.putanjaSlike}" class="img-fluid" alt="${slika.altSlike}">
</div>`
});
divGalerije.innerHTML = ispisSlika;


//ISPIS ARHITEKTI
var nizArhitekti = [
    {
        putanjaArhitektaSlika: "assets/images/worker1Edit.jpg",
        altArhitektaSlika: "worker1",
        imeArhitekta: "Robert Anderson"
    },
    {
        putanjaArhitektaSlika: "assets/images/worker2Edit.jpg",
        altArhitektaSlika: "worker2",
        imeArhitekta: "Emma Smith"
    },
    {
        putanjaArhitektaSlika: "assets/images/worker3Edit.jpg",
        altArhitektaSlika: "worker3",
        imeArhitekta: "Abigail Walker"
    }
];

var ispisArhitekti = "";
var divZaArhitekte = document.getElementById("blockArchitects");
nizArhitekti.forEach(function(arhi){
    ispisArhitekti +=`<div class="col-lg-4 col-md-12 d-flex justify-content-center mb-5">
    <div class="card w-75">
            <img src="${arhi.putanjaArhitektaSlika}" class="card-img-top" alt="${arhi.altArhitektaSlika}">
        <div class="card-body">                          
            <h5 class="card-title orangeTextColor">${arhi.imeArhitekta}</h5>
        </div>
    </div>
</div>`
});
divZaArhitekte.innerHTML = ispisArhitekti;

//ISPIS DIZAJNERA

var nizDizajnera = [
    {
        putanjaDizajnerSlika: "assets/images/worker4Edit.jpg",
        altDizajnerSlika: "worker1",
        imeDizajner: "Mia Henderson"
    },
    {
        putanjaDizajnerSlika: "assets/images/worker5Edit.jpg",
        altDizajnerSlika: "worker2",
        imeDizajner: "John Evans"
    },
    {
        putanjaDizajnerSlika: "assets/images/worker6Edit.jpg",
        altDizajnerSlika: "worker3",
        imeDizajner: "Tammy Abraham"
    }
];

var ispisDizajnera = "";
var divZaDizajnere = document.getElementById("blockDesigners");
nizDizajnera.forEach(function(diz){
    ispisDizajnera +=`<div class="col-lg-4 col-md-12 d-flex justify-content-center mb-5">
    <div class="card w-75">
            <img src="${diz.putanjaDizajnerSlika}" class="card-img-top" alt="${diz.altDizajnerSlika}">
        <div class="card-body">                          
            <h5 class="card-title orangeTextColor">${diz.imeDizajner}</h5>
        </div>
    </div>
</div>`
});
divZaDizajnere.innerHTML = ispisDizajnera;
}

//JQUERY
$(document).ready(function(){
    $("#bars").click(function(){
        $(".menu--off").css('display', 'block');
    })
    $("#leftArrow").click(function(){
        $(".menu--off").css('display', 'none');
    })
    $("#nav li").click(function(){
        $(".menu--off").css('display', 'none');
    })

    //dodavanje boje texta na p tagove u about-u
    $("#specializationBlok p").addClass("orangeTextColor");

    //button Prikazi vise za about
    $('#showMoreTextAbout').css("display", "none");
    $('#btnPrikaziVise').click(function (e) {
        e.preventDefault();
        if ($('#showMoreTextAbout').is(':visible')) {
            $('#showMoreTextAbout').slideUp();
            $(this).val('Show More');
        } else {
            $('#showMoreTextAbout').slideDown();
            $(this).val('Show Less');
        }
    });

    

    //button Prikazi vise za autora
    $('#showMoreAuthor').css("display", "none");
    $('#btnPrikaziViseAutor').click(function (e) {
        e.preventDefault();
        if ($('#showMoreAuthor').is(':visible')) {
            $('#showMoreAuthor').slideUp();
            $(this).val('Show More');
        } else {
            $('#showMoreAuthor').slideDown();
            $(this).val('Show Less');
        }
    });
    //vanillabox za slike
    $(".vanillaBoxSlika a").vanillabox();
})

//SLIDER
var i = 0;
var nizSlika = ["sliderSlika1Edit", "sliderSlika2Edit", "sliderSlika3Edit"];

function imageSlider(){
    document.getElementById("slider").style.backgroundImage = "url('assets/images/"+nizSlika[i]+".jpg')";

    if(i < nizSlika.length-1){
        i++;
    }
    else{
        i=0;
    }

    setTimeout("imageSlider()", 2500);
}


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

function showArchitects(){
    document.getElementById("blockArchitects").style.display="flex";
    document.getElementById("blockDesigners").style.display="none";
    document.getElementById("btnArchitects").style.backgroundColor="rgba(251,173,107,1)";
    document.getElementById("btnDesigners").style.backgroundColor="rgba(73,140,159,1)";
}

function showDesigners(){
    document.getElementById("blockArchitects").style.display="none";
    document.getElementById("blockDesigners").style.display="flex";
    document.getElementById("btnArchitects").style.backgroundColor="rgba(73,140,159,1)";
    document.getElementById("btnDesigners").style.backgroundColor="rgba(251,173,107,1)";
}