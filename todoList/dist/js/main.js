"use strict";console.log("omg it works");var addItem=document.querySelector(".add-item"),newItem=document.querySelector(".new-item"),createNewItem=function(){console.log("added items");var e=document.querySelector("ul"),t=document.createElement("li");e.appendChild(t);var n=document.querySelector(".new-item");t.textContent=n.value,n.value="",updateTotal();var o=document.createElement("input");o.setAttribute("type","checkbox"),t.appendChild(o),o.addEventListener("click",function(){t.classList.toggle("finished"),console.log("finished")})};newItem.addEventListener("keydown",function(){13===event.keyCode&&createNewItem()}),addItem.addEventListener("click",createNewItem);var clearFinishedItem=document.querySelector(".clear-finished");clearFinishedItem.addEventListener("click",function(){var t=document.querySelector(".finished");t.forEach(function(e){deleteItem(t)}),t.remove(),console.log("buh bye",t),updateTotal()});var updateTotal=function(){document.querySelector(".item-total").textContent=document.querySelectorAll("li").length};
//# sourceMappingURL=main.js.map