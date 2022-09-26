AFRAME.registerComponent("create-button",{
    init: function(){
        var button1=document.createElement("button");
        button1.innerHTML="ORDER SUMMARY"
        button1.setAttribute("id", "summary-button");
        button1.setAttribute("class", "btn btn-warning");

        var button2=document.createElement("button");
        button2.innerHTML="ORDER NOW"
        button2.setAttribute("id", "order-button");
        button2.setAttribute("class", "btn btn-warning");

        var button3=document.createElement("button");
        button3.innerHTML="RATE TOY"
        button3.setAttribute("id", "rate-button");
        button3.setAttribute("class", "btn btn-warning");

        var buttonDiv = document.getElementById("button-div");
        buttonDiv.appendChild(button1);
        buttonDiv.appendChild(button2);
        buttonDiv.appendChild(button3);
    }
})