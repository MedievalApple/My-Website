topNav = document.getElementById("topnav")
errorWindow = document.getElementById("window")

const redirectTable = {
        "/media-assistant": "/Media-Assistant.html",
        "/ma": "/Media-Assistant.html",
        "/ma-setup": "/media-assistant/setup.html",
        "/public/licenses/media-assistant-license": "/media-assistant/license.txt",
        "/ma-privacy-information": "/media-assistant/privacy-info.html",
        "/rally-waffle": "/Rally-Waffle.html",
        "/rw": "/Rally-Waffle.html",
        "/legend-of-sprig": "/Legend-of-Sprig.html",
        "/los": "/Legend-of-Sprig.html",
        "/about": "/About.html"
    }

if(document.location.pathname == "/404.html" | document.location.pathname == "/404"){
    document.title = "Medieval Apple - 404"
    topNav.style.display = ""
    errorWindow.style.display = ""
}
else{
    try {
        path = document.location.pathname.split(".")[0].toLowerCase().replace(/\/\s*$/, "")
        if(redirectTable[path] != undefined){
            document.location.pathname = redirectTable[path]
        } 
        else{
            document.title = "Medieval Apple - 404"
            topNav.style.display = ""
            errorWindow.style.display = ""
        }   
    } catch (error) {
        document.title = "Medieval Apple - 404"
        topNav.style.display = ""
        errorWindow.style.display = ""
    }
}