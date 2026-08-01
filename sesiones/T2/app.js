

function hora() {
    let f = new Date();
    let h = f.getHours();
    let m = f.getMinutes();
    let s = f.getSeconds();

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    document.getElementById("reloj").textContent = h + ":" + m + ":" +s;

}
setInterval(hora,1000);
hora();

//

let tarjetas = document.getElementsByClassName("pelicula");
for (let i=0 ; i<tarjetas.length; i++){
    tarjetas[i].addEventListener("mouseover", function(){
        this.style.border = "2px solid green";
    });
    tarjetas[i].addEventListener("mouseout", function(){
        this.style.border = "";
    });
}

let idColores;
function colores() {
    let r = Math.floor(Math.random()* 151); //Caclulo de 0 a 150
    let g = Math.floor(Math.random()* 151);
    let b = Math.floor(Math.random()* 151);

    document.getElementById("titulo").style.color= "rgb("+ r + "," + g + "," + b +")";
}
idColores = setInterval(colores,1000)


    function pararColores() {
        clearInterval(idColores);
    }
