var filter =document.getElementById('filter');
var itemlist =document.getElementById('items');

//filter submit even listener
filter.addEventListener('keyup',filteritems);


//function of filter

function filteritems(e){
    var text=e.target.value.toLowerCase();

    //get lis 
     var items =itemlist.getElementsByTagName('li');

     //convert to an array

    Array.from(items).forEach(function(items){
        var itemname=items.firstChild.textContent;
        if(itemname.toLowerCase().indexOf(text)!=-1){
            items.style.display='block';
        }
            else{
                items.style.display='none';
            }
    });

}