function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page-div');
    pages.forEach(page => page.classList.remove('active'));

    // Show the selected page
    const page = document.getElementById(pageId);
    page.classList.add('active');
}

function login() {
    alert('Login functionality coming soon!');
}

function showDiscordAlert() {
    // Create the custom alert
    const confirmAction = confirm("You are about to be redirected to discord.com. Do you want to continue?");
    
    if (confirmAction) {
        // If user clicks "OK", redirect to Discord
        window.location.href = "https://discord.com";
    } else {
        // If user clicks "Cancel", just do nothing
        console.log("User declined to go to Discord.");
    }
}