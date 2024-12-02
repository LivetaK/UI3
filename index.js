document.addEventListener('DOMContentLoaded', function() {
let form = document.querySelector("form");

if (form && form.elements["lytis"] && form.elements["gimimoData"]) { 
    let vedybinepadetisdiv = document.getElementById("vedybinepadetisdiv");
    function asmensKodas(){
        let l = form.elements["lytis"].value;
        let gd = form.elements["gimimoData"].value;

        if (l && gd){
            let gdDate = new Date(gd);
            let year = gdDate.getFullYear();
            let metai = String(year).slice(-2);
            let menuo = String(gdDate.getMonth() + 1).padStart(2, "0");
            let diena = String(gdDate.getDate()).padStart(2, "0");

            let pirmasSK;
            if (year >= 1900 && year <= 1999) {
                pirmasSK = (l === "Vyras") ? "3" : "4";
            } else if (year >= 2000 && year <= 2099) {
                pirmasSK = (l === "Vyras") ? "5" : "6";
            } else {
                pirmasSK = "";
            }
            
            let asmensKodoPradzia = pirmasSK + metai + menuo + diena;
            form.elements["asmensKodas"].value = asmensKodoPradzia;
        }
    }
    function vedybos() {
        let gd = form.elements["gimimoData"].value;
        if (gd) {
            let gimimoMetai = new Date(gd).getFullYear();
            let amzius = 2024 - gimimoMetai;
    
            if (amzius >= 16) {
                vedybinepadetisdiv.classList.remove("hidden");
            } else {
                vedybinepadetisdiv.classList.add("hidden");
            }
        }
    }
    form.elements["gimimoData"].addEventListener("change", vedybos);
    form.elements["lytis"].addEventListener("change", asmensKodas);
    form.elements["gimimoData"].addEventListener("change", asmensKodas);
}

if(form && form.elements["issilavinimas"]){ 
    let issilavinimoLygis = form.elements["issilavinimas"];
    let institucijadiv = document.getElementById("institucijadiv");
    let baigimometaiddiv = document.getElementById("baigimometaiddiv");
    let kvalifikacijadiv = document.getElementById("kvalifikacijadiv");
    let mokslolaipsnisdiv = document.getElementById("mokslolaipsnisdiv");

    function issilavinimoLaukai(){
        let pasirinkimas = issilavinimoLygis.value;
        if (pasirinkimas  && pasirinkimas  !== "joks"){
            institucijadiv.classList.remove("hidden");
            baigimometaiddiv.classList.remove("hidden");
            } else {
                institucijadiv.classList.add("hidden");
                baigimometaiddiv.classList.add("hidden");
            }
        if(pasirinkimas && (pasirinkimas === "koleginis" || pasirinkimas === "universitetinis")){
            kvalifikacijadiv.classList.remove("hidden");
            mokslolaipsnisdiv.classList.remove("hidden");
            }else {
                kvalifikacijadiv.classList.add("hidden");
                mokslolaipsnisdiv.classList.add("hidden");
            }
        }
    issilavinimoLygis.addEventListener("change", issilavinimoLaukai);
    issilavinimoLaukai();
    }
    if(form && form.elements["profesija[]"]){ 
        let profesinePadetis = form.elements["profesija[]"];
        let studijupakopadiv = document.getElementById("studijupakopadiv");
        let kursasdiv = document.getElementById("kursasdiv");
        let studijuistaigadiv = document.getElementById("studijuistaigadiv");
        let baigimometaidiv = document.getElementById("baigimometaidiv");
        let darboistaigadiv = document.getElementById("darboistaigadiv");
        let pareigosdiv = document.getElementById("pareigosdiv");
        let nedarbasdiv = document.getElementById("nedarbasdiv");
        let atostogupabaigadiv = document.getElementById("atostogupabaigadiv");
        let darbopatirtisdiv = document.getElementById("darbopatirtisdiv");
        let darbosritisdiv = document.getElementById("darbosritisdiv");



        function profesiniailaukai(){
            let arStudijuoja = Array.from(profesinePadetis).some(
                (element) => element.checked && element.value === "studijuoja"
            );
            if (arStudijuoja) {
                studijupakopadiv.classList.remove("hidden");
                kursasdiv.classList.remove("hidden");
                studijuistaigadiv.classList.remove("hidden");
                baigimometaidiv.classList.remove("hidden");
            } else {
                studijupakopadiv.classList.add("hidden");
                kursasdiv.classList.add("hidden");
                studijuistaigadiv.classList.add("hidden");
                baigimometaidiv.classList.add("hidden");
            }

            let arDirba = Array.from(profesinePadetis).some(
                (element) => element.checked && element.value === "dirba"
            );
            if (arDirba) {
                darboistaigadiv.classList.remove("hidden");
                pareigosdiv.classList.remove("hidden");
                darbopatirtisdiv.classList.remove("hidden");
                darbosritisdiv.classList.remove("hidden");
            } else {
                darboistaigadiv.classList.add("hidden");
                pareigosdiv.classList.add("hidden");
                darbopatirtisdiv.classList.add("hidden");
                darbosritisdiv.classList.add("hidden");
            }
            let arAtostogauja = Array.from(profesinePadetis).some(
                (element) => element.checked && element.value === "atostogos"
            );
            if (arAtostogauja) {
                atostogupabaigadiv.classList.remove("hidden");
            } else {
                atostogupabaigadiv.classList.add("hidden");
            }

            let arNieko = Array.from(profesinePadetis).some(
                (element) => element.checked && element.value === "nieko"
            );
            if (arNieko) {
                nedarbasdiv.classList.remove("hidden");
            } else{
                nedarbasdiv.classList.add("hidden");
            }
        }

        profesinePadetis.forEach((element) =>
            element.addEventListener("change", profesiniailaukai)
        );

        profesiniailaukai();
    }
    const progressBarElement = document.getElementById("progressbar");

    const totalPages = 5;
    const body = document.querySelector('body');
    const currentPage = parseInt(body.getAttribute('data-page')) || 1;
    const progress = ((currentPage - 1) / (totalPages - 1)) * 100;
    progressBarElement.style.width = `${progress}%`;
});
