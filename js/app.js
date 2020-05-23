//stock the images in objects and array
class Myimage {
    constructor (img, category, description) {
        this.img = img;
        this.category = category;
        this.description = description;
    }
}

let all = [
    new Myimage ("evgeny-tchebotarev-aiwuLjLPFnU-unsplash.jpg", "cars", "cars black audi r8 parked beside road"),
    new Myimage("ali-kazal-7b39feeIMO0-unsplash.jpg", "nature", "nature, forrest && fog"),
    new Myimage("roman-manukyan-GVoN5s8lGBo-unsplash.jpg", "nature", " nature, sea, trees, canoe, ship"),
    new Myimage("ren-ran-bBiuSdck8tU-unsplash.jpg", "nature", "nature, green plants"),
    new Myimage("joseph-gonzalez-fdlZBWIP0aM-unsplash.jpg", "food", "food, sandwich with boiled egg, eggs"),
    new Myimage("kalen-emsley-_LuLiJc1cdo-unsplash.jpg", "nature", "nature, sea, forrest"),
    new Myimage("brooke-lark-M4E7X3z80PQ-unsplash.jpg", "food", "food, strawberry, Cookies, cake, pancakes, pancake"),
    new Myimage("philipp-kammerer-6Mxb_mZ_Q8E-unsplash.jpg", "travel", "travel, man with red hiking backpack facing body of water and mountains at daytime"),
    new Myimage("calum-lewis-8Nc_oQsc2qQ-unsplash.jpg", "food", "food, blue and white ceramic plate with pancakes"),
    new Myimage("tyler-nix-q-motCAvPBM-unsplash.jpg", "travel", "girl, mountain, bag, travel"),
    new Myimage("simon-rae-kSJTEv9w5l4-unsplash.jpg", "travel", "sea, men, trees, travel"),
    new Myimage("dhiva-krishna-YApS6TjKJ9c-unsplash.jpg", "cars", "cars, black Mercedes-Benz car"),
    new Myimage("kolar-io--Sj09-h9UZE-unsplash.jpg", "tech", "amazon echo, siri, ai, artificial intelligence, tech, technology"),
    new Myimage("five-assorted-color-cars-parked-inside-room-1231643.jpg", "cars", "five assorted-color cars parked inside room"),
    new Myimage("farzad-nazifi-p-xSl33Wxyc-unsplash.jpg", "tech", "monitors, screen, headphone, code, programming, tech, technology"),
    new Myimage("uriel-soberanes-MxVkWPiJALs-unsplash.jpg", "tech", "vr, virtual reality, tech, technology"),
    new Myimage("owen-beard-K21Dn4OVxNw-unsplash.jpg", "tech", "robot, artificial intelligence, screen, tech, technology"),
    new Myimage("view-of-vintage-camera-325153.jpg", "tech", "camera, phone, mouse, controller, tech, technology")
];
let food = [];
let travel = [];
let nature = [];
let cars = [];
let tech = [];

for (let items of all) {
    if (items.category === "food") {
        food.push(items);
    }else if (items.category === "travel") {
        travel.push(items);
    }else if (items.category === "nature") {
        nature.push(items);
    }else if (items.category === "cars") {
        cars.push(items);
    }else if (items.category === "tech") {
        tech.push(items);
    }
}

//the default content
window.addEventListener('load', () => {
    deleteAll();
    addItem(all);
    imageHover();
}, false);

//focusing the search bar 
let startBtn = document.getElementById('start-btn');
let searchBar = document.querySelector('input');
startBtn.addEventListener('click', () => {
    searchBar.focus();
}, false);

//while the user search for images
let searchIcon = document.querySelector('.header-content__input-containner__search');
let filtredArr = [];
const filterItems = () => {
    for (let item of all) {
        if (item.description.includes(searchBar.value.toLowerCase())) {
            filtredArr.push(item);
        } 
    }
}

searchIcon.addEventListener('click', () => {
    deleteAll();
    filterItems();
    if (filtredArr.length === 0) document.querySelector('.noFound').style.display = "initial";
    else {
        addItem(filtredArr);
        filtredArr = [];
        document.querySelector('.noFound').style.display = 'none';
    }
    searchBar.value = "";
    location.href = "index.html#imgStck";
    
}, false);
document.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        deleteAll();
        filterItems();
        if (filtredArr.length === 0) document.querySelector('.noFound').style.display = "initial";
        else {
            addItem(filtredArr);
            filtredArr = [];
            document.querySelector('.noFound').style.display = 'none';
        }
        searchBar.value = "";
        location.href = "index.html#imgStck";
    }
}, false);

// adding items to UI
function addItem (arr) {
    let myArr = [];
    let cols = document.querySelectorAll('.col');
    for (let els of arr) {
        let theHtml = `
        <div class="col__img-conatinner">
            <img src="./img/${els.img}" class="img" alt="">
            <p class="author">Author...</p>
            <img src="./img/likeIcon.png" class="love" alt="">
            <img src="./img/shareIcon.png" class="world" alt="">
            <img src="./img/downloadIcon.png" class="download" alt="">
        </div>
        `;    
        myArr.push(theHtml);
    }
    for (let i=0; i<arr.length; i++) {
        let j = i;
        if (i > 2) {
            if (i % 3 === 0) {
                j = 0;
                var a = i;
            }else {
                j = i-a;
            }
        } 
        cols[j].insertAdjacentHTML('beforeend', myArr[i]);
    }
}

//delete all items form UI
function deleteAll () {
    let colOne = document.querySelector('.one');
    let items = document.querySelectorAll('.one .col__img-conatinner');
    for (let els of items) {
       colOne.removeChild(els);
    }

    let colTwo = document.querySelector('.two');
    let items2 = document.querySelectorAll('.two .col__img-conatinner');
    for (let els of items2) {
        colTwo.removeChild(els);
    }

    let colThree = document.querySelector('.three');
    let items3 = document.querySelectorAll('.three .col__img-conatinner');
    for (let els of items3) {
        colThree.removeChild(els);
    }
}

//listening to events that's update the UI
let links = document.querySelectorAll('.navigation li');
links[0].addEventListener('click', () => {
    deleteAll();
    addItem(all);
    for (link of links) {
        link.className = "";    
    }
    links[0].className = "selected";
}, false);

links[1].addEventListener('click', () => {
    deleteAll();
    addItem(food);
    for (link of links) {
        link.className = "";    
    }
    links[1].className = "selected";
}, false);

links[2].addEventListener('click', () => {
    deleteAll();
    addItem(travel);
    for (link of links) {
        link.className = "";    
    }
    links[2].className = "selected";
}, false);

links[3].addEventListener('click', () => {
    deleteAll();
    addItem(nature);
    for (link of links) {
        link.className = "";    
    }
    links[3].className = "selected";
}, false);

links[4].addEventListener('click', () => {
    deleteAll();
    addItem(cars);
    for (link of links) {
        link.className = "";    
    }
    links[4].className = "selected";
}, false);

links[5].addEventListener('click', () => {
    deleteAll();
    addItem(tech);
    for (link of links) {
        link.className = "";    
    }
    links[5].className = "selected";
}, false);

//while the user hover on the image
function imageHover () {
    let imageContainner = document.querySelectorAll('.col__img-conatinner');
    for (let images of imageContainner) {
        images.addEventListener("mouseover", () => {
            images.className += " col__img-conatinner--filter";
            images.childNodes[3].style.display = 'initial';
            images.childNodes[5].style.display = 'initial';
            images.childNodes[7].style.display = 'initial';
            images.childNodes[9].style.display = 'initial';
        }, false);
    }
    
    for (let images of imageContainner) {
        images.addEventListener("mouseleave", () => {
            images.classList.remove("col__img-conatinner--filter");
            images.childNodes[3].style.display = '';
            images.childNodes[5].style.display = '';
            images.childNodes[7].style.display = '';
            images.childNodes[9].style.display = '';
        }, false);
    }
}

//testing contri
