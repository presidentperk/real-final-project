var features = ["Products/Edgar'sNachos.jpg","Products/BlackCat.jpg","Products/ChickenHopFrog.jpg"];

function featuredItems(){
    //console.log(images);
    var list = document.createElement('ul');
    for (var i = 0; i < features.length; i++){
        var image = document.createElement('img')
        image.src=features[i];
        var item = document.createElement('li');
        item.appendChild(image);
        list.appendChild(item);
        item.setAttribute("class", "home-item")
        image.setAttribute('onclick', 'itemPage(this.alt,this.src)');
        image.setAttribute('alt',features[i]);
        //image.setAttribute('a','SingleProductpage.html');
    }
    document.getElementById('featured-items').appendChild(list);
    //list.setAttribute("class", "home-item")
}
function itemPage(name, source){

    console.log(name);
    console.log(source);
    console.log("test");
    var header = document.createElement('h1');
    var image = document.createElement('img');
    header.innerText=pathToTitle(name);
    image.src=source;
    document.getElementById("content").appendChild(header);
    document.getElementById("content").appendChild(image);
    document.getElementById("featured-items").innerHTML='';

}
function pathToTitle(path){
    var title = path.substring(9, path.length-4);
    title=title.replace(/([A-Z0-9])/g, ' $1').trim();

    return title;
}
window.onload=featuredItems;