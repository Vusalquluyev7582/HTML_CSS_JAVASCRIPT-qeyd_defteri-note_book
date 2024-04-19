/*REVIEW -  1) */
function tamam() {
    var listItems = document.getElementsByTagName("li")
    // console.log(listItems);

    for (var x = 0; x < listItems.length; x++) {
        // console.log(listItems[x]);

        listItems[x].addEventListener("click", function () {
            this.classList.toggle("tamamlanmış")
        })
    };
}
tamam()


/*REVIEW -  2) */
function silinənGörəvlər() {
    var silButtonları = document.getElementsByTagName("span")
    // console.log(silButtonları);

    for (var i = 0; i < silButtonları.length; i++) {

        silButtonları[i].addEventListener("click", function () {
            var silinəcək = this.parentElement;
            silinəcək.remove();
        })
    };
}
silinənGörəvlər()


/*REVIEW -  3) */
var görəv = document.getElementsByTagName("input")[0];
// console.log(görəv);

görəv.addEventListener("keypress", function (e) {
    // console.log(e.keyCode);

    if (e.keyCode === 13) {
        // alert("Entere basıldı")

        var yeniQeyd = document.createElement("li");
        yeniQeyd.innerHTML = görəv.value;
        var yeniSpan = document.createElement("span");
        var yeniİcon = document.createElement("i");
        yeniİcon.setAttribute("class", "fa fa-window-close")


        yeniSpan.insertBefore(yeniİcon, yeniSpan.firstChild);
        yeniQeyd.insertBefore(yeniSpan, yeniQeyd.firstChild);

        var görəvlər = document.getElementsByTagName("ul")[0];
        görəvlər.insertBefore(yeniQeyd, görəvlər.lastChild)

        silinənGörəvlər();
        tamam();
        görəv.value = "";
    }
})