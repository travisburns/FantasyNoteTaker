//newcharacter functionality

//

//switch tabs code
function setupTabs () {
    document.querySelectorAll(".tabs__button").forEach(button => {
        button.addEventListener("click", () => {
            const sideBar = button.parentElement;
            const tabsContainer = sideBar.parentElement;
            const tabNumber = button.dataset.forTab;
            const tabToActivate = tabsContainer.querySelector(`.tabs__content[data-tab="${tabNumber}"]`);
            
            sideBar.querySelectorAll(".tabs__button").forEach(button => {
                button.classList.remove("tabs__button--active");
            });
            
            tabsContainer.querySelectorAll(".tabs__content").forEach(tab => {
                tab.classList.remove("tabs__content--active");
            });

            button.classList.add("tabs__button--active");
            tabToActivate.classList.add("tabs__content--active");

        });
    });
}

document.addEventListener("DOMContentLoaded", ()=> {
    setupTabs();

    document.querySelectorAll(".tabs").forEach(tabsContainer => {
        tabsContainer.querySelector(".tabs__sidebar .tabs__button");
    });
});



//----------append form data to charsections----------//

var form = document.getElementById("myform").elements;



//function newInfo()

function newInfo() {
    
    //within the scope of newInfo
    
   //variable newsection equals an empty array(for info-items)
    const newsection = [];
    //variable descitems equals an empty array(For desc-class items)
    const descitems = [];
    
    // variable myImages equals equals an empty array(for image. does not display image)
    const myImages = [];

    
    //log descitems to the console
    console.log(newsection);

    const newinfo = document.createElement("div");
   
    
    ///create a whole nother loop that only selects only the image
    //place that image's data in a whole nother array. 
    //within that loop, set the rules of that image
    //apend the image data to an additonal class named imageclass
    //appendimageclass to my-class



//for loop for selecting the image does not work
    for(var i = 0; i < form.length - 12; i++) {
        var loadFile = function(event) {
            var image = document.getElementById('fileInput');
            image.src = URL.createObjectURL(event.target.files[0]);
            myImages.push(image.src);
            const imageTag = document.createElement("img");
            
        }
    }




    //----------for loop section----------//

//for loop for looping through the info-items section 
   for(var i = 1; i < form.length - 5; i++){
    
     //javascript for appending the image src for each form submit
     const para = document.createElement("p");
    //create a text node using the form[i].name + : + the form[i].value
     const node = document.createTextNode(form[i].name + " : " + form[i].value);
     //let p append node as a child
     para.appendChild(node);
     //variable element = grab the ID charsections
     const element = document.getElementById("charsections");
     //push nodes text content to newsection array
     newsection.push(node.textContent);
     
     
    }

    console.log(form[0].value);
    //loop through the description items in the category. 



    //----------for loop section----------//


//for loop for selecting desc-class items
    for(var i = 8; i < form.length; i++){ 
        //create element p and store it in var descpara
        const descpara = document.createElement("p");
        //create text node of form[i].name + : + form[i].value
        const descnode = document.createTextNode(form[i].name + " : " + form[i].value);
        //descpara appendChild descnode 
        descpara.appendChild(descnode);
        //var descelement equals grabId charasections
        const descelement = document.getElementById("charsections");
        //push descnode.textcontent to the array descitems
         descitems.push(descnode.textContent);
    
    }





 //----------  Appending to charsections section  ----------//

// var element equals grab charsections 
const element = document.getElementById("charsections");
//varaible newDiv equals the creation of a new element, div
const newDiv = document.createElement("div");
// var newdescdiv equals new create new element div(Specific to the desc - section/items)
const newdescdiv = document.createElement("div");
//var newDivImage equals the creation of a new div(Specific to the uploaded image)
const newDivImage = document.createElement("div");
//var newDivImage equals create a img element 
const newImage = document.createElement("img");
//append newDiv to element(charsections)
element.append(newDiv);
//add class my-class to newDiv
newDiv.classList.add("my-class");
//append newDivImage("div" for the image) to newDiv()
newDiv.append(newDivImage);

newDivImage.classList.add('image-class');

//my-class append newinfo which is a new div
newDiv.append(newinfo);
//new div, newinfo appends newsection, which is the array that contains first seven values

//my-class append newdescdiv, which is a new div
newDiv.append(newdescdiv);
//new div, 
//add the class desc-class to newdescdiv
newdescdiv.classList.add("desc-class");
//add the class info-items to newinfo
newinfo.classList.add("info-items");








// forEach section  Appending to charsections section


//attempt at following the same structure as the following forEach statments that are able to append p elements for each object in the array
//the first one does not work due to confusion about images and array's, the second two are able to work correctly
myImages.forEach((object => {
    const imageTag = document.createElement("img");
    imageTag.append(object);
    newDivImage.appendChild(newImage);
}))


   

//for each onject within newsection, return....
newsection.forEach((object => {
  
    
   //var newP creates a new p element
    const newP = document.createElement("p");
    //take the new p element and append the object to it
    newP.append(object);
    //take newDiv( creates a new div ) and append newP(the p element)
    newinfo.append(newP);
    
    

    
}));


//for each object within descitems return....
descitems.forEach((object => {
    //var desccatp creates a new p element
    const desccatp = document.createElement('p');
    //take the new p element and append the object to it.
    desccatp.append(object);
    //take newdescdiv( creates a new div ) and append desccatp(the p element)
    newdescdiv.append(desccatp);
}));



}










//new Item functionality -repeat of code above. For each tab activating a new code, needing a way to simplify so that only need to run one code. Wrap the function in someting.
//wrap the function newInfo in a for Each tab? for each tab activate the function newInfo? 

var form2 = document.getElementById("myform2").elements;
    
    
function newInfo2() {
    
    const newFormName2 = []; 
    const newsection2 = [];
    const newDiv2 = document.createElement("div");
   
    
    for(var i = 0; i < form2.length; i++){
    
     

     const para2 = document.createElement("p");
     const node2 = document.createTextNode(form2[i].name + " : " + form2[i].value);
     para2.appendChild(node2);
     const element2 = document.getElementById("itemsections");
     newsection2.push(node2.textContent);

     //span class needs to be wrapped around the form[i].name
     
    let formnode2 = newFormName2.push(form2[i].name);
    
    
     
     // -- edit this not complete at all. 
}



const element2 = document.getElementById("itemsections");
element2.append(newDiv2);
newDiv2.classList.add("my-class");

newsection2.forEach((object => {
  
    const newspan2 = document.createTextNode('span');
   
    const newP2 = document.createElement("p");
    newP2.append(object);
    newDiv2.append(newP2);
    
    

    
}));
}






