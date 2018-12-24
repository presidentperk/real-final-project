
function itemPage(name, source){
    window.location='SingleProductpage.html';
    console.log(name);
    console.log(source);
    console.log("test");
    document.getElementById('itemName').innerText = name;
    document.getElementById('itemImage').setAttribute("src", source);

}