var page1 = ["Products/Amontillado.jpg","Products/AnnabelLee.jpg","Products/BlackCat.jpg","Products/BuffaloShrimpSalad.jpg","Products/ChickenHopFrog.jpg","Products/ChipsAndQueso.jpg","Products/Edgar'sDrunkenChili.jpg"];
var page2 = ["Products/FishTacos.jpg","Products/GrilledChickenSalad.jpg","Products/GrilledVegetableQuesadilla.jpg","Products/HopFrog.jpg","Products/Edgar'sNachos.jpg","Products/VeggieBurger.jpg","Products/PitAndPendulum.jpg"];
var page3 = ["Products/RueMorgue.jpg","Products/ShrimpQuesadilla.jpg","Products/SideSalad.jpg","Products/StarvingArtist.jpg","Products/TellTaleHeart.jpg","Products/TheRaven.jpg","Products/TheSleeper.jpg"];

var description1=["Guacamole, Jalapeno Jack Cheese, Pico de Gallo, and Sour Cream", "Crabcake and Remoulade","Bacon, Chili, and Pimento Cheese","Spicy Buffalo Shrimp on a Salad","BBQ Sauce, Bacon, Monterey Jack","Chips... with Queso","Black Bean and Beef Chili"];
var description2=["Tacos with Fish in them","A tossed salad with Grilled Chicken","A quesadilla with mixed grilled veggies","BBQ Sauce, Bacon, Monterey Jack","Corn Tortilla Chips, Chili, Monterey Jack, Pico de Gallo, Guac, Sour Cream","A burger not made of meat","Cheese and bacon"];
var description3=["Fried Egg, Bacon, Cheese","Buffalo Shrimp in a Quesadilla","A Decent Side Salad","Your choice of cheese, served with Marinated Bacon-Bleu Cheese Cole Slaw","Fried Egg, Applewood Bacon, and Chedder","Plain Burger","Garlic Bleu Cheese and Buffalo Shrimp"]

var pageNumber = 1;

var counter = 0;
function menuSetup(pageNum,number){
    if(counter!=0){
        document.getElementById("menu-items").innerHTML='';
    }
    //console.log(images);
    var list = document.createElement('ul');
    for (var i = 0; i < pageNum.length; i++){
        var image = document.createElement('img')
        image.src=pageNum[i];
        var item = document.createElement('li');
        
        var title = document.createElement('p')
        title.innerText= pathToTitle(pageNum[i]);
        item.appendChild(title);
        item.appendChild(image);
        list.appendChild(item);
        //item.setAttribute("class", "home-item")
        image.setAttribute('onclick', 'itemPage(this.alt,this.src)');
        image.setAttribute('alt',pageNum[i]);
        image.setAttribute('class','picture');

        //image.setAttribute('a','SingleProductpage.html');
    }
    document.getElementById('menu-items').appendChild(list);
    list.setAttribute("id", "currentMenu")
    counter++;
    console.log(number);
    pageNumber=parseInt(number);
}
function itemPage(name, source){
    var header = document.createElement('h1');
    var image = document.createElement('img');
    var text = document.createElement('p');
    
    
    text.innerText = getDescription(name,pageNumber);
    
    header.innerText=pathToTitle(name);
    image.src=source;
    document.getElementById("content").appendChild(header);
    document.getElementById("content").appendChild(image);
    document.getElementById("content").appendChild(text);
    document.getElementById("menu-items").innerHTML='';

}
function pathToTitle(path){
    var title = path.substring(9, path.length-4);
    title=title.replace(/([A-Z0-9])/g, ' $1').trim();

    return title;
}
function getDescription(name, pageNum){
    if(pageNum==1){
        return description1[page1.indexOf(name)];
    }
    if(pageNum==2){
        return description2[page2.indexOf(name)];
    }
    if(pageNum==3){
        return description3[page3.indexOf(name)];
    }
}
window.onload=menuSetup(page1, 1);