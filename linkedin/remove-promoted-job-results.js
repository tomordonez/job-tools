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
    1. Go to the bookmark and click on it
    2. (Don't touch the browser) Wait a few seconds to auto-scroll to the bottom
    3. The Promoted results should be removed from the page
    4. Review/apply to jobs
    5. Go to the next page and repeat from step 1.
*/

// One-Line JS to add to the bookmark URL
javascript: (async () => { var resultWindow = document.querySelector('.jobs-search-results-list'); var resultWindowHeight = resultWindow.scrollHeight; resultWindow.scrollTo({ top: resultWindowHeight / 4, behavior: 'smooth' }); await new Promise(r => setTimeout(r, 2000)); resultWindow.scrollTo({ top: resultWindowHeight / 2, behavior: 'smooth' }); await new Promise(r => setTimeout(r, 2000)); resultWindow.scrollTo({ top: resultWindowHeight, behavior: 'smooth' }); await new Promise(r => setTimeout(r, 2000)); var results = document.querySelectorAll('.jobs-search-results__list-item'); for (let result of results) { if (result.innerText.includes('Promoted')) { result.remove(); } } resultWindow.scrollTo(0, 0); })();

// JS Prettified
javascript: (async () => {

    var resultWindow = document.querySelector('.jobs-search-results-list');
    var resultWindowHeight = resultWindow.scrollHeight;

    resultWindow.scrollTo({ top: resultWindowHeight / 4, behavior: 'smooth' });
    await new Promise(r => setTimeout(r, 2000));

    resultWindow.scrollTo({ top: resultWindowHeight / 2, behavior: 'smooth' });
    await new Promise(r => setTimeout(r, 2000));

    resultWindow.scrollTo({ top: resultWindowHeight, behavior: 'smooth' });
    await new Promise(r => setTimeout(r, 2000));

    // Remove all Promoted results
    var results = document.querySelectorAll('.jobs-search-results__list-item');

    for (let result of results) {
        if (result.innerText.includes('Promoted')) {
            result.remove();
        }
    }
    // Auto scroll up
    resultWindow.scrollTo(0, 0);
})();