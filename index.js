
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



//  THIS NEXT LINE OF CODE CONTROLS THE DISAPPEARING OF THE LOVE GREETING EMOJI  
      
    let myWave = document.getElementById("wave")    

    let waveTimeOff = setTimeout(function(){myWave.textContent=""}, 4000)

    let waveOpacity = setTimeout(function(){myWave.style.opacity="0"}, 3000)

 // the code for diapering of the greeting love emoji ends here




// HANDLING ALL ABOUT SHOWING EXTRA CONTENT ON CLICKING ANY BLOG VISIBLE PORTION

let myBlogs = document.querySelectorAll(".each-particular-blog-visible-content").length

     let hideOrShowContent = (data) => {

            data.addEventListener("click", function() {    //this happens second, attaching eventlistiner to all of the class at once 
            
            let desiredInnerBlog = this.parentElement.children[1]  //I am using each class to get their corresponding hidden content and saving it into desiredInnerBlog
            
            
            toggleContent(desiredInnerBlog) //therefore whenever they are now clicked, they will call the toggleContent function(passing in the desired inner hidden content, so the right guy is toggled)
            
                    
        
        }) 
            }      
            
            
            // function scrollToTop(div) {  //this will bring any clicked blog to the top
                
            //     div.scrollIntoView({
            //       behavior: "instant",
            //     })
            //   }
            
     
    
    let toggleContent = (data) => {

        let introductionWord = data.parentElement.children[0].children[2] //because I want the short initial content of the hidden div showing in the visible div to disappear
        let   mySpan =   data.parentElement.children[0].children[0].children[0] 
    


         if(data.style.display == "block") {
             data.style.display = "none"
             introductionWord.style.display = "block"
            //  mySpan.style.color = "blue"
             mySpan.style.display = "none"
             }else{
                data.style.display = "block"
             introductionWord.style.display = "none"
            //  mySpan.style.color = "red"
             mySpan.style.display = "block"
            //  scrollToTop(data.parentElement.children[0]) // this code is her so the scrolling only happens when you click to open the hidden content ans when you close it, it does not move
            }
        
    }
    
    
     document.querySelectorAll(".each-particular-blog-visible-content").forEach(hideOrShowContent)  //this happens first and i am looping through all visible blog content

    // HANDLING ALL ABOUT SHOWING EXTRA CONTENT ON CLICKING ANY BLOG VISIBLE PORTION ENDS HERE





    

        // HANDLING ALL ABOUT THE SORTING OF THE BLOG

    let myAllBlogs = document.querySelectorAll(".each-particular-blog .blog-category")
    let allMyBlogButtons = document.querySelectorAll(".blog-sorting-btns button")
    
    
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
                    toggleContent(data)}  //this code will close every open blog whenever the blog is sorted
             })
             
             }   


             let blogButtonActiveIndictor = (selectedBlogCategory) => {
                allMyBlogButtons.forEach(function(eachButton){   // this code controls the background color to indicate each active blog category
                    if (selectedBlogCategory == eachButton.textContent) {
                        eachButton.style.backgroundColor = " #6bc329"
                    } else { eachButton.style.backgroundColor = "#296a12"}
                 })
             }
    

             allMyBlogButtons.forEach(function(eachButton){
        
         let buttonCategoryValue = eachButton.textContent      //get the text content to know category of each button

         eachButton.addEventListener("click", function(){
             sortBlog(buttonCategoryValue)                           //add an event listener to it passing in the blog category already saved to properly sort the blog based on that category
             blogButtonActiveIndictor(buttonCategoryValue)
        })
    })



    //HANDLING THE CLEARING OF THE NEWSLETTER SUBSCRIPTION FORM AFTER SUBMISSION

    
     let newsLetterForm = document.querySelector(".news-letter form")

     let newsLetterSubmitBtn = document.querySelector("#subscribe")

      window.addEventListener("pageshow", function() {
        newsLetterForm.reset()
        
      });
     
      
// controlling the linking of the blogs. so that when spiritual or any other blog is clicked in a different page, it will land you in the blog and sort the blog adequately according to the blog category you selected in the previous page.

let sortBlogByLink = (category) => { 
    sortBlog(category)
    blogButtonActiveIndictor(category)
}


if (window.location.search.includes("?healthBlog=true")) {
    sortBlogByLink("health")

  } else if(window.location.search.includes("?technologyBlog=true"))  {
    sortBlogByLink("technology")

} else if (window.location.search.includes("?relationshipBlog=true")) {
    sortBlogByLink("relationship")

} else if (window.location.search.includes("spiritualBlog=true")) {
    sortBlogByLink("spiritual")

} else if (window.location.search.includes("?businessBlog=true")) {
    sortBlogByLink("business")

} else if (window.location.search.includes("?motivationBlog=true")) {
    sortBlogByLink("motivation")

}
