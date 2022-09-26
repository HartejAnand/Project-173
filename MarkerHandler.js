AFRAME.registerComponent("marker-handler",{
    init: async function(){
        this.el.addEventListner("marker-found", ()=> {
            console.log("marker is found");
            this.handleMarkerFound();
        });
        this.el.addEventListner("marker-lost", ()=> {
            console.log("marker lost");
            this.handleMarkerLost();
        });
    },

    handleMarkerFound: function(){
        var buttonDiv=document.getElementById("button-div");
        buttonDiv.style.display="flex";

        var ratingButton=document.getElementById("rating-button");
        ratingButton.addEventListener("click", function(){
            swal({
                icon: "warning",
                title: "Rate Toy",
                text: "Work in progress"
            });
        });

        var orderButton=document.getElementById("order-button");
        orderButton.addEventListener("click", function(){
            swal({
                icon: "https://i.imgur.com/4NZ6uLY.jpg",
                title: "Thanks for Ordering",
                text: "Your order will be delivered soon"
            });
        });
    },

    askaddress: function () {
        swal({
          title: "Welcome to ToysRUs!!",
          icon: iconUrl,
          content: {
            element: "input",
            attributes: {
              placeholder: "Type your address",
              type: "string",
              min: 1
            }
          },
          closeOnClickOutside: false,
        }).then(inputValue => {
          address = inputValue;
        });
      },

    handleMarkerLost: function(){
        var buttonDiv=document.getElementById("button-div");
        buttonDiv.style.display="none";
    },

    handleOrderSummary: async function () {
        var orderSummary = await this.getOrderSummary(tNumber);
        var modalDiv = document.getElementById("modal-div");
        modalDiv.style.display = "flex";
        tableBodyTag.innerHTML = "";
        var currentOrders = Object.keys(orderSummary.current_orders);
        currentOrders.map(i => {

        var tr = document.createElement("tr");

        var item = document.createElement("td");
        var price = document.createElement("td");
        var quantity = document.createElement("td");
        var subtotal = document.createElement("td");
        item.innerHTML = orderSummary.current_orders[i].item;

        price.innerHTML = "$" + orderSummary.current_orders[i].price;
        price.setAttribute("class", "text-center");

        quantity.innerHTML = orderSummary.current_orders[i].quantity;
        quantity.setAttribute("class", "text-center");

        subtotal.innerHTML = "$" + orderSummary.current_orders[i].subtotal;
        subtotal.setAttribute("class", "text-center");

        tr.appendChild(item);
        tr.appendChild(price);
        tr.appendChild(quantity);
        tr.appendChild(subtotal);
        tableBodyTag.appendChild(tr);
    })
    }
})