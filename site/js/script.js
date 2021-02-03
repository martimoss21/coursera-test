// Event handling
document.addEventListener("DOMContentLoaded",
    function (event) {

        function sayHello (event) {
            this.textContent = "Said it!"
            var name = 
                document.getElementById("name").value;
                var message = "<h2>Hey " + name + "!!</h2>";
            
            document.querySelector("#content").innerHTML = message;
            
            if (name === "baller") {
                var title =
                 document.querySelector("#title").textContent;
        
                title = "What's good my guy!";
        
                document.querySelector("#title").textContent = title;
            };
        }
        
        // Unobstrusive event binders
        document.querySelector("button").addEventListener("click", 
            sayHello
        );
        
        document.querySelector("body").addEventListener("mousemove", 
            function (event) {
                if (event.shiftKey === true) {
                    console.log("X: " + event.clientX);
                    console.log("Y: " + event.clientY);
                }
            }
        );
        }
);


// x = "Hello ballers!"

// var x;
// console.log(x);

// if (x == undefined) {
//     console.log("x is undefined")
// }

// if (x == undefined) {
//     console.log("x is undefined")
// }
// else {
//     console.log("x is defined and equals to " + x)
// }