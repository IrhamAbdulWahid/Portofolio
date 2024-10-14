document.addEventListener("DOMContentLoaded", function() {
    const socialIcons = document.querySelectorAll('.social-media a');
    const profilePic = document.querySelector('.profile-pic');

    
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            icon.style.color = '#ffdd57';
        });

        icon.addEventListener('mouseout', function() {
            icon.style.color = '#fff';
        });
    });

    
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            profilePic.style.transform = 'scale(1.1)';
        } else {
            profilePic.style.transform = 'scale(1)';
        }
    });
});
