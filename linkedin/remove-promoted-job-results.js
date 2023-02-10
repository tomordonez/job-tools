/*
Problem:
Go to Linkedin Jobs and enter a search keyword.
The list shows a lot of "Promoted" results which often are not relevant.
For example search for: Spanish.
It shows 20 Promoted (out of 25) results that are not relevant or don't even contain this search keyword.
There isn't a filter in the search to filter out Promoted results.

Solution 1:
Visually ignore the Promoted results.

Solution 2:
Use JavaScript to remove the Promoted results.
- Create a new bookmark in Chrome or Firefox
- Name: Linkedin Remove Promoted Results
- URL: (Enter JS code below)
- Save bookmark
- In Linkedin Jobs, in the results page.
    - Scroll down to the bottom to display all results.
    - Go to the bookmark and click on it
    - The Promoted results should be removed from the page

Todo:
- Auto scroll down and up to load the results. I bet there is a good way of doing that
but this didn't work for me:

This gets the height of the left results section:

    var resultWindowHeight = document.querySelector('.scaffold-layout__list').scrollHeight 

This didn't scroll down:

    window.scrollTo(0, resultWindowHeight)

*/

// One-Line JS to add to the bookmark URL
javascript: (function () { var parentResults = document.querySelectorAll('.jobs-search-results__list-item'); for (let result of parentResults) { if (result.innerText.includes('Promoted')) { result.remove(); } } })();

// JS Prettified
javascript: (function () {
    var parentResults = document.querySelectorAll('.jobs-search-results__list-item');
    for (let result of parentResults) {
        if (result.innerText.includes('Promoted')) {
            result.remove();
        }
    }
})();