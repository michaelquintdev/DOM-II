let welcome = document.querySelector(".intro h2");
let homeImg = document.querySelector(".intro img");
let adventure = document.querySelector(".inverse-content h2");
let destination = document.querySelector(".content-destination h2")
let iHateNavItems = document.querySelectorAll("nav a")
let foot = document.querySelector(".footer")
// Code Starts

// 1
welcome.addEventListener('click', function(event){
    if(welcome.style.textTransform !== 'uppercase'){
        welcome.style.textTransform = 'uppercase'
    }else{
        welcome.style.textTransform = 'capitalize'
    }
});
// 2
homeImg.addEventListener('mouseover', function(event){
    homeImg.style.borderRadius = '200px';
    homeImg.style.transition = '1s';
})
// 3
homeImg.addEventListener('mouseout', function(event){
    homeImg.style.borderRadius = '0';
    homeImg.style.transition = '1s';
})
// 4
document.addEventListener('scroll', function(event){
    adventure.style.backgroundColor = 'red';
    adventure.style.transition = '5s';
})
// 5
destination.addEventListener('copy', function(event){
   const newCopy = document.getSelection();
   event.clipboardData.setData('text/plain', newCopy.toString() + 'HEHEHEHEHE I ADDED THIS lol so funny and silly and quirky and different.');
   event.preventDefault();
})
// 6
const theyDontDeserveAName = Array.from(iHateNavItems);
theyDontDeserveAName.forEach(function(item){
    item.addEventListener('click', function(event){
        item.style.display = 'none';
    })
})
// 7
document.addEventListener('keydown', function(event){
    theyDontDeserveAName.forEach(function(item){
        item.style.display = 'none';
    }) 
});
// 8
window.addEventListener('load', function(event){
    alert("yooooooooooooooooooooooooooooooooooooooooooooooooooooooo");
});
