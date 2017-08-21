let items = document.getElementsByClassName("item");
for (let i = 0; i < items.length; i++) {
    (function () {
        let y = i; // closuer
        items[y].addEventListener("click", function (event) {
            if (y === 2) {
                // in captuer mode.
                // stop propagate after third, fourth.
                // event.stopPropagation();
                // if y === 2 then, prevent event fire!
                // onclick event is never happen. 
                // this is due to check box status stay off.
                event.preventDefault();
            }
            // event.preventDefault(); // what is this?
            console.log(items[y], event);
        }, true); // captuer phase
    })();
}