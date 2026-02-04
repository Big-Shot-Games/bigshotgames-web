console.log("Hee hee hee. What, trying to sneak a peek at the dev console for secrets?");
console.log("That's actually not a bad idea. You're not finding anything here, though. Sorry. Or are you? Who knows. I don't. I don't really care either.");

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
