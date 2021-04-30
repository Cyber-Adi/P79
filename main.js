MLA=["Chicken Tandoori","Deluxe Veg","Paneer Tikka","Veg Supreme","Chicken Extra"];
function getmenu(){
    var htmld;
    htmld="<o1 class='menulist'>"
    MLA.sort();
    for(var i=0;i<MLA.length;i++){
        htmld=htmld+'<li>'+MLA[i]+'</li>'
    }
    htmld=htmld+"</o1>"
    document.getElementById("display_menu").innerHTML=htmld;
}
function add_item(){
    var htmld;
    var item=document.getElementById("add_item").value;
    MLA.push(item);
    MLA.sort();
    htmld="<section class='cards'>"
    for(var i=0;i<MLA.length;i++){
        htmld=htmld+'<section class="card">'+'<img src="images/pizzaImg.png"/>'+MLA[i];
    }
    htmld=htmld+"</section>"
    document.getElementById("display_addedmenu").innerHTML=htmld;
}