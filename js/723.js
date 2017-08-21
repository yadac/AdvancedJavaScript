let items = document.getElementsByClassName("item");
for (let i = 0; i < items.length; i++) {
    (function () {
        let y = i; // closuer
        items[y].addEventListener("click", function (event) {
            console.log(items[y], event);
        }, false);
        // what is last parameter means?
        // -> false or none = bubbling phase
        //    true = capturing phase
    })();
}