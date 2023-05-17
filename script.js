/*menu bar toggle system */

let menuBg = document.querySelector(".menu-bg")
let barBtn = document.querySelector("#bars")
let menuBody = document.querySelector(".menu-bar")
let back = document.querySelector(".back")
function toggleMenu() {
    menuBg.addEventListener("click", () => {
        menuBg.style.display = "none"
        menuBody.classList.add("active")
        menuBody.classList.remove("active2")
    })

    barBtn.addEventListener("click", () => {
        menuBg.style.display = "block"
        menuBody.classList.add("active2")  
        menuBody.classList.remove("active") 
    
    })
}

toggleMenu()

    /* Getting started topic header toggle */

let topicArrowDwn = document.querySelectorAll("#topic-arr-down")
let topicHeaderDropBox = document.querySelectorAll(".getting-started-header")

function toggleTopicDropDown() {


    topicArrowDwn.forEach(el => {
        el.addEventListener("click", () => {
            el.classList.toggle("active")
            el.classList.toggle("fa-angle-up")
        })
    })

    topicHeaderDropBox.forEach(el => {
        el.addEventListener("click", () => {
            el.classList.toggle("active")
            el.classList.toggle("fa-angle-up")
        })
    })


}
toggleTopicDropDown()

/* Enabling the getting started link in all categories */

let gettingStartedLinks = document.querySelectorAll(".gs-article-link")
let containerBody = document.querySelector(".container")
let gettingStartedBody = document.querySelector(".getting-started")

function enableGsLink() {
    gettingStartedLinks.forEach(el => {
        el.addEventListener("click", () => {
    setTimeout(() => {
        containerBody.style.display = "none"
        gettingStartedBody.style.display = "block"
        back.style.display = 'block'
        
    }, 3000);
            
            loadContent()
        })
    })
}

enableGsLink()

/* window loadern */

let loader = document.querySelector(".loader")
let count = 0
function loadContent() {
    
        setInterval(() => {
            count++
            if (count <= 100) {
                loader.style.width = count + "%"

            }
            else {
                loader.style.display = "none"
            }
        }, 30);
    
}



goBack()
/* Creating an acct section */


let creatingAcctLink = document.querySelectorAll(".creating-acct-link")
let createAcctBody = document.querySelector(".create-acct")
function creatingAcct() {
    creatingAcctLink.forEach(el => {
        el.addEventListener("click", () => {

     
            setTimeout(() => {
                containerBody.style.display = "none"
                createAcctBody.style.display = 'block'
                back.style.display = 'block'
            }, 3000);
                    
            loadContent()
        })

    })
}

creatingAcct()

/*For you page links */

let forYouPage = document.querySelector(".for-you-page")
let forYouPageLink = document.querySelector(".for-you-page-link")


function forYouPageFunc() {
    forYouPageLink.addEventListener("click", () => {

     
        setTimeout(() => {
            containerBody.style.display = "none"
            forYouPage.style.display = 'block'
            back.style.display = 'block'
        }, 3000);
                
                loadContent()


}) 
}
forYouPageFunc()

/* Setting up page link */


let settingUpPage = document.querySelector(".setting-up-page")
let settingUpLink = document.querySelectorAll(".setting-up-link")


function settingUpPageFunc() {


    settingUpLink.forEach(el => {
        
        el.addEventListener("click", () => {

     
            setTimeout(() => {
                containerBody.style.display = "none"
                settingUpPage.style.display = 'block'
                back.style.display = 'block'
            }, 3000);
                
            loadContent()


        })
    }) 
}
settingUpPageFunc()

/* Login and troubleshooting page */

let troubleShootingPage = document.querySelector(".troubleshooting-page")
let troubleShootingPageLink = document.querySelectorAll(".troubleshooting-page-link")
let troubleShootingPageLinkMain = document.querySelector(".troubleshooting-page-link-main")

let loginPage = document.querySelector(".login-page")

function troubleshootingFunc() {
    troubleShootingPageLink.forEach(el => {
        
        el.addEventListener("click", () => {

     
            setTimeout(() => {
                containerBody.style.display = "none"
                loginPage.style.display = "block"
                back.style.display = 'block'
            }, 3000);
                
            loadContent()


        })
    }) 
  troubleShootingPageLinkMain.addEventListener("click", () => {

     
        setTimeout(() => {
            containerBody.style.display = "none"
            troubleShootingPage.style.display = 'block'
            back.style.display = 'block'
        }, 3000);
            
        loadContent()


    })
    
}

troubleshootingFunc()
/*

let loginPage = document.querySelector(".login-page")
let loginPageLink = document.querySelectorAll(".login-page-link")

function loginPageFunc() {
    loginPageLink.forEach(el => {
        
        el.addEventListener("click", () => {

     
            setTimeout(() => {
                containerBody.style.display = "none"
                loginPage.style.display = "block"

            }, 3000);
                
            loadContent()


        })
    })    
}

loginPageFunc()*/

/* back function */
function goBack() {
    back.addEventListener("click", () => {
        loadContent()   
        setTimeout(() => {
            containerBody.style.display = "block"
            back.style.display = "none"
            gettingStartedBody.style.display = 'none'
            forYouPage.style.display = 'none'
            troubleShootingPage.style.display = 'none'
            loginPage.style.display = 'none'
            settingUpPage.style.display = 'none'
            
        }, 2000);
                
        
    })
}

/* remove ad */

let adBtn = document.querySelector("#ad-btn")
let adBody = document.querySelector(".ad")
function removeAd() {

    adBtn.addEventListener("click", () => {
        adBody.style.display = 'none'
    })
}

removeAd()