// Scroll to Top Button Functionality
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function() {
    showScrollToTopBtn();
};

function showScrollToTopBtn() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
