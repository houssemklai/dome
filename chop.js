var tab=[400,250]
var sum =0
for(var i=0;i<tab.length;i++){
    sum=sum+tab[i]
  }
  console.log(sum)
  
 
var plus_btn = document.querySelectorAll(".plus-btn");

for (let i = 0; i < plus_btn.length; i++) {
    console.log(plus_btn[i]);
    plus_btn[i].addEventListener("click", function () {
  
      if (plus_btn[i].nextElementSibling.innerHTML < 10)
        plus_btn[i].nextElementSibling.innerHTML++;
        Total()
    });
  }
  var minus_btn = document.querySelectorAll(".minus-btn");

for (let i = 0; i < minus_btn.length; i++) {
    console.log(minus_btn[i]);
  minus_btn[i].addEventListener("click", function () {
    if (minus_btn[i].previousElementSibling.innerHTML > 1)
      minus_btn[i].previousElementSibling.innerHTML--;
      Total()
  });
}

var likebtntostyle = document.querySelector(".like-btn");
console.log(likebtntostyle);
 likebtntostyle.addEventListener("click", function () {
   console.log(likebtntostyle.style.color);

   if (likebtntostyle.style.backgroundColor == "aqua") {
     likebtntostyle.style.backgroundColor = "red";
   } else {
     likebtntostyle.style.backgroundColor = "aqua";
   }
 });


 var likebtntostyle1 = document.querySelector(".like-btn1");
console.log(likebtntostyle1);
 likebtntostyle1.addEventListener("click", function one () {
   console.log(likebtntostyle1.style.color);

   if (likebtntostyle1.style.backgroundColor == "aqua") {
     likebtntostyle1.style.backgroundColor = "red";
   } else {
     likebtntostyle1.style.backgroundColor = "aqua";
   }
 });

 


 //var myobj = document.querySelectorAll("remove-btn");
//myobj.remove("remove-btn");
/*var remove_btn = document.querySelectorAll('remove-btn');
console.log('remove_btn:', 'remove_btn')
remove_btn.addEventListener("click", function () {
remove_btn.removeAttribute("houssem");
})*/
/*var parentElem = document.getElementsByClassName('houssem');
     var childElem = document.querySelectorAll('remove_btn');
     childElem.removeparent(parentElem);
     console.log("childElem", childElem)*/
     function myFunction() {
        var myobj = document.getElementById("demo");
        myobj.remove("demo");
        Total()
      }
      function myFunctionn() {
        var myobjj = document.getElementById("demo1");
        myobjj.remove("demo1");
        Total()
      }



      function Total(){
var price= document.querySelectorAll('.pru')
var quantity= document.querySelectorAll('.q')
var total=document.querySelector('#total')
var res=0
console.log(price)
console.log(quantity)

for (let i=0; i<price.length; i++){
    res =res+ Number(price[i].innerHTML)* Number(quantity[i].innerHTML)
}
total.innerHTML=res
      }

 