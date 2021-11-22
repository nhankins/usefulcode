console.log('Javascript is cool')

var number = 21;
//var string  = "Click me"
var isCool = true;

//document.getElementById('box').innerHTML = string;

document.getElementById('math').innerHTML = number + 4;

if (number == 20){

    console.log("Nice");
} else {
    console.log('Nope')
}

// If statements can be ran from browser as well



//basic for loop below

// for(var i = 0; i < 10; i++){
   // console.log(i)
//}



var groceries = ['Milk', 'Eggs', 'Cheese'];

function listGroceries(){

    for(var i = 0; i < groceries.length; i++){
    console.log(groceries[i]);
    }


}

// instantiates function below

listGroceries();


document.getElementById('box').addEventListener('click', function(){
    alert('I got clicked');

});