topNav = document.getElementById("topnav")
errorWindow = document.getElementById("window")

const redirectTable = {
        "/media-assistant": "/Media-Assistant",
        "/rally-waffle": "/Rally-Waffle",
        "/legend-of-sprig": "/Legend-of-Sprig",
        "/about": "/About"
    }

if(document.location.pathname == "/404.html" | document.location.pathname == "/404"){
    document.title = "Medieval Apple - 404"
    topNav.style.display = ""
    errorWindow.style.display = ""
}
else{
    if(redirectTable[document.location.pathname] != undefined){
        document.location.pathname = redirectTable[document.location.pathname]
    } 
    else{
        document.title = "Medieval Apple - 404"
        topNav.style.display = ""
        errorWindow.style.display = ""
    }
}