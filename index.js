/***********************************************************************************
 * Exercise XP : 
 * ---------------------------------------------------------------------------------
 * @author Melissa Kouadio <angemelisk@gmail.com>
 * @description : resolve all xp exercice
 * **********************************************************************************/ 

/*****************************
 * EXERCICE I
 *****************************/

let divId = document.getElementById('container');
console.log(divId); //Retrieve the div and console.log it
document.querySelector("ul > li:last-child").innerHTML ="Richard"; //Change the name “Pete” to “Richard”
let two_ul = document.getElementsByClassName("list")[1];
two_ul.firstElementChild.innerHTML = "Melissa" ; //Change each first name of the two <ul>'s to your name.
two_ul.removeChild(two_ul.lastElementChild) //Delete the <li> that contains the text node “Sarah”.

 
/************************************************************
 * EXERCICE II: Users And Style
 ************************************************************/

let div = document.querySelectorAll('div');
div[1].style = "padding:15px; background: lightblue"; //Add a “light blue” background color and some padding to div

let uls = document.querySelectorAll('ul');
uls[2].firstElementChild.style = "display:none;" //Do not display the <li> that contains the text node “John”.

uls[2].lastElementChild.style = "border: 5px solid gold"; //Add a border to the <li> that contains the text node “Pete”
document.querySelector("body").style = "font-size: 25px"; //Change the font size of the whole body.


/********************************************************
 * EXERCICE III: Change The Navbar
 *******************************************************/

// change the value of the id attribute from navBar to socialNetworkNavigation
let nav = document.getElementById('navBar');
nav.setAttribute("id","socialNetworkNavigation");

let navUl = document.querySelector("#socialNetworkNavigation ul")
let newLi = document.createElement("li"); //create a new <li> tag 
let link = document.createElement("a") //create a new <a> tag 
let textNode = document.createTextNode("Logout") //create a new text node with “Logout”;
link.setAttribute("href","#") //set attribute href to tag <a>
link.appendChild(textNode); //Append the text node to tag <a>
newLi.appendChild(link) // Append new tag to <li> tag
navUl.appendChild(newLi); // append new li <li> to <ul> tag

/********************************************************
 * EXERCICE IV:  My Book List
 *******************************************************/
const allBooks = [ //create array of object book
    {
        title: "La chèvre de ma mère",
        author: "Roberto Kaniama",
        alreadyRead: false,
        image: "https://images-na.ssl-images-amazon.com/images/I/61H3bvvL8WL._AC_UL600_SR600,600_.jpg"
    },
    {
        title: "Hannah",
        author: "Paul-loup Sutlizer",
        alreadyRead: true,
        image: "https://www.babelio.com/couv/CVT_Hannah_5315.jpg"
    }
];

let listBooks = document.getElementsByClassName('listBooks')[0] // div to contains books list

// for each book, we create div to contain book title, image, author  
allBooks.forEach(function(book) {
    let div = document.createElement('div')
    let img = document.createElement("img")
    let title = document.createElement('h5')
    let author = document.createElement('h6')
    let hasRead = document.createElement('span')

    div.className ="item-book"
    title.appendChild(document.createTextNode(book.title))

    img.setAttribute('src',book.image)
    img.style = "width: 110px; height:110px; border:1px solid black;"

    author.appendChild(document.createTextNode(book.author))
    author.style = "text-decoration:underline"

    book.alreadyRead ? hasRead.appendChild(document.createTextNode("OUI")) : hasRead.appendChild(document.createTextNode("NON"))
    book.alreadyRead ? hasRead.style = "background: green; color:white; font-size:13px; padding:10px": hasRead.style = "background: red; font-size:13px; color:white; padding:10px"

    div.appendChild(img)
    div.appendChild(title)
    div.appendChild(author)
    div.appendChild(hasRead)
    listBooks.appendChild(div) // append div item to principal div
})
