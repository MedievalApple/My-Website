topNav = document.getElementById("topnav")
errorWindow = document.getElementById("window")

const redirectTable = {
        "/media-assistant": "/Media-Assistant",
        "/rally-waffle": "/Rally-Waffle",
        "/legend-of-sprig": "/Legend-of-Sprig",
        "/about": "/About"
    }

if(document.location.pathname == "/404.html" | document.location.pathname == "/404"){
    topNav.style.display = ""
    errorWindow.style.display = ""
}
else{
    if(redirectTable.has(document.location.pathname)){
        document.location.pathname = redirectTable[document.location.pathname]
    } 
    else{
        topNav.style.display = ""
        errorWindow.style.display = ""
    }
}