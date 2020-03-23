var ele = document.getElementById('all-about-title');
var ele2 = document.getElementById('all-about-description');
var ele3 = document.getElementById('join_us');

var size = document.documentElement.clientHeight;
console.log(size);
if (size > 850) {
    ele.id = "all-about-title-read";
    ele2.id = "all-about-description-read";
    ele3.id = "join_us-read";
}
window.addEventListener("scroll", function(event) {
    var scroll = this.scrollY;
    console.log("Scroll: " + scroll);
    if (scroll > 350) {
        ele.id = "all-about-title-read";
        ele2.id = "all-about-description-read";
        title = "title-read";
        ele3.id = "join_us-read";
    }
});