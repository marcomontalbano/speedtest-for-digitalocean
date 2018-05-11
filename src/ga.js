document.querySelectorAll('.js--link').forEach((link) => {
    link.addEventListener('click', function() {
        window.ga('send', {
            hitType: 'event',
            eventCategory: 'Link',
            eventAction: 'click',
            eventLabel: this.getAttribute('data-label'),
        });
    });
});
