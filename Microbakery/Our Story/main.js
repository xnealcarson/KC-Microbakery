document.getElementById('search-toggle').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent link default behavior
    const searchBar = document.getElementById('search-bar');
    searchBar.style.display = searchBar.style.display === 'flex' ? 'none' : 'flex';
});