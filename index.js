
// JS FOR HOME PAGE STARTS HERE

     
        //  Here i am controlling the event drop down on the nav-bar 
let navBarEventsDropDown = document.querySelector(".navbar-events")
let myPopUpEventsDropDown = document.querySelector(".pop-up-events")
let myRestOfBody = document.querySelector(".rest-of-body")
let navBarEventsDropDownContent = document.getElementById("Event-drop-down")
let myPopUpDropDownContent = document.getElementById("pop-up-Event-drop-down")
let myPopUpEventDropDownContents = document.querySelectorAll(".pop-up-event-dropdown-contents")
let eventArrow = document.getElementById("arrow") //this helps to change the arrow direction on clicking the event on navbar
let myPopUpArrow = document.getElementById("PopUp-arrow")
let myNavBarEvent = document.querySelector(".navbar-events")
let reverseColorFill = document.querySelectorAll(".color-fill")
let myMinimizeIcon = document.querySelector(".minimize-icon")
let myPopUp = document.querySelector(".pop-up")
let myHr = document.querySelector("hr")


 let attachEventListener = (eachData) => {
    eachData.addEventListener("mouseout", function() {
    this.classList.add("color-fill-reverse")    
                 })   }

reverseColorFill.forEach(attachEventListener)

let eventDropDownLive = false //this combined with the showEventsDropDown functions makes it possible for the event to also hide the drop down after it has brought it out by If statement.

let showEventsDropDown = () => {
     
     if (eventDropDownLive === false) {
        //    navBarEventsDropDownContentClasses.forEach(removeEventListener)
    navBarEventsDropDownContent.style.visibility= "visible"
    myNavBarEvent.style.backgroundColor = "rgba(107, 195, 41)"
    myNavBarEvent.style.color = "black"
    eventArrow.textContent = "▲"
    eventDropDownLive = true 
    } else { hideEventsDropDown()}
    
                                }

 let hideEventsDropDown = () => {

    if ( popUpLive === true ) { poUpOnAndOff()} // This will take care the popUp is properly on or off as desired

    navBarEventsDropDownContent.style.visibility = "hidden"
    eventArrow.textContent = "▼"
    myNavBarEvent.style.backgroundColor = "inherit"
    myNavBarEvent.style.color = "inherit"
    eventDropDownLive = false
 }

navBarEventsDropDown.addEventListener ("click", showEventsDropDown)
myRestOfBody.addEventListener ("click", hideEventsDropDown) // because I want when the user clicks outside the popUps they will close.

let popUpDropDownLive = false // This will help check if popupDropdown is alive or toggled on or displaying or not.

let popUpEventContentOnAndOff = () => { 
    let deleteClass = (eachValue) => {eachValue.classList.remove("color-fill-reverse")}
    myPopUpEventDropDownContents.forEach(deleteClass)
    
    if ( popUpDropDownLive === false ) {
        myPopUpDropDownContent.style.display = "flex"
        myPopUpArrow.textContent = "▲"
        myPopUpEventsDropDown.style.backgroundColor = "rgba(107, 195, 41)"
        myPopUpEventsDropDown.style.color = "black"
        popUpDropDownLive = true 
    }else { 
         myPopUpDropDownContent.style.display = "none"
        myPopUpArrow.textContent = "▼"
        myPopUpEventsDropDown.style.backgroundColor = "inherit"
        myPopUpEventsDropDown.style.color = "inherit"
        popUpDropDownLive = false 
         }
}

myPopUpEventsDropDown.addEventListener ("click", popUpEventContentOnAndOff )
    
function reversePopUpGradient(data) {
    data.classList.add("color-fill-reverse")
  }

 let popUpLive = false // serving as a switch to regulate the popUp appearance and disappearance

let poUpOnAndOff = () => {

    if ( popUpLive === false ) {
        myPopUp.style.visibility = "visible"
         myMinimizeIcon.style.backgroundColor = "rgba(107, 195, 41)"
        myHr.style.visibility = "visible"
         popUpLive= true 
    }else { 
        if (popUpDropDownLive === true) { popUpEventContentOnAndOff() } // so that everything opened will be closed
        
        myPopUp.style.visibility = "hidden"
        myMinimizeIcon.style.backgroundColor = "inherit"
        myHr.style.visibility = "hidden"
        popUpLive= false }  
}

  myMinimizeIcon.addEventListener ("click", poUpOnAndOff)

//  All about events drop-down navbar ends here         29th-May-2023



//  this next line of code controls the diapering of the greeting love emoji
      
    let myWave = document.getElementById("wave")    

    let waveTimeOff = setTimeout(function(){myWave.textContent=""}, 4000)

    let waveOpacity = setTimeout(function(){myWave.style.opacity="0"}, 3000)

// //  this next line of code controls the diapering of the greeting love emoji ends here






let myBlogs = document.querySelectorAll(".each-particular-blog-visible-content").length

     let hideOrShowContent = (data) => {

            data.addEventListener("click", function() {
            
            let desiredInnerBlog = this.parentElement.children[1]
            toggleContent(desiredInnerBlog)
             }) 
            }    
            
            // this dot parent element at index0 dot child at index3 to get to the visible h5
     
    
    let toggleContent = (data) => {
         
         if(data.style.display == "block") {
             data.style.display = "none"
             }else{data.style.display = "block"}
        
    }
    
    
     document.querySelectorAll(".each-particular-blog-visible-content").forEach(hideOrShowContent)


    

        // HANDLING ALL ABOUT THE SORTING OF THE BLOG

    let myAllBlogs = document.querySelectorAll(".each-particular-blog .blog-category")
    
    
    let sortBlog = (data) => {
        
        myAllBlogs.forEach(function(eachBlog){
            
         if (data.toLowerCase() == "all"){ 
             eachBlog.parentElement.parentElement.parentElement.style.display = "block"
              } else if (eachBlog.textContent.toLowerCase().includes(data.toLowerCase())) {
             eachBlog.parentElement.parentElement.parentElement.style.display = "block"
         } else { eachBlog.parentElement.parentElement.parentElement.style.display = "none" }
         
             })  

             document.querySelectorAll(".each-particular-blog-hidden-content").forEach(function(data){
                     if(data.style.display == "block") {
                    data.style.display = "none"}  //this code will close every open blog whenever the blog is sorted
             })
             
             }   
    

    document.querySelectorAll(".blog-sorting-btns button").forEach(function(eachButton){
        
         let buttonValue = eachButton.textContent 
         eachButton.addEventListener("click", function(){
             sortBlog(buttonValue) })
        })

