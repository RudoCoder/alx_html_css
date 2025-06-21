/**
 * Toggles the mobile navigation menu.
 * * This script selects the menu icon and the navigation menu.
 * It adds a click event listener to the menu icon to toggle
 * the 'active' classes on both the icon and the menu,
 * which triggers the open/close animations and visibility.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Select the necessary elements from the DOM
    const menuIcon = document.querySelector('.menu-icon');
    const navMenu = document.querySelector('#main-nav');

    // Check if both elements exist before adding the event listener
    if (menuIcon && navMenu) {
        menuIcon.addEventListener('click', () => {
            // Toggle the 'is-active' class on the menu icon for the 'X' animation
            menuIcon.classList.toggle('is-active');

            // Toggle the 'is-open' class on the navigation menu to show/hide it
            navMenu.classList.toggle('is-open');

            // Update the aria-expanded attribute for accessibility
            const isExpanded = menuIcon.getAttribute('aria-expanded') === 'true';
            menuIcon.setAttribute('aria-expanded', !isExpanded);
        });
    }
});
