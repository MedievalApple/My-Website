window.addEventListener("load", (event) => {
    if(localStorage.getItem("bg") == 0){
        bgCastle();
        document.getElementById("castle").checked = true;
    }
    else if(localStorage.getItem("bg") == 1){
        bgMinecraft();
        document.getElementById("minecraft").checked = true;
    }
});

function bgCastle(){
    document.getElementById("dropdown-image").src = "/public/assets/bg1.jpg";
    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = 'url(\'/public/assets/bg1.jpg\')';
    localStorage.setItem("bg", 0);
}

function bgMinecraft(){
    document.getElementById("dropdown-image").src = "/public/assets/bg.png";
    var body = document.getElementsByTagName('body')[0];
    body.style.backgroundImage = 'url(\'/public/assets/bg.png\')';
    localStorage.setItem("bg", 1);
}