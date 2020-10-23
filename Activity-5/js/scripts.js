/**
 * Wrap everything in an IIFE (Immediately Invoked Function Expression) to keep
 * our variables constrained to the scope of this function and out of the global scope.
 */
(function () {

    /******************************************************
    * Package data and constructor objects
    *******************************************************/

    // Package data array (simulated data source, such as JSON or database recordset)
    //use 'extension' for vs code instead of package
    var data = [
        {
            name: 'HTML Snippets',
            description: 'HTML Snippets adds in rich language support for HTML markup, including snippets, quick info, and descriptions that include whether a tag is deprecated.',
            author: 'Mohamed Abusaid',
            url: 'https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets',
            downloads: 4194973,
            stars: 60,
            price: 0.00,
            selector: 'p1'
        },
        {
            name: 'CSS Peek',
            description: 'CSS Peak extends HTML and Embedded JavaScript templates with Go To Definition support for CSS classes and IDs found in your markup.',
            author: 'Pranay Prakash',
            url: 'https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek',
            downloads: 1193151,
            stars: 61,
            price: 0.00,
            selector: 'p2'
        },
        {
            name: 'Open in Browser',
            description: 'This Visual Studio Code extension does exactly what it says: it enables you to view an HTML file in-browser.',
            author: 'TechER',
            url: 'https://marketplace.visualstudio.com/items?itemName=techer.open-in-browser',
            downloads: 2534352,
            stars: 51,
            price: 0.00,
            selector: 'p3'
        }
    ];

    // (Atom) Package constructor function
    function Extension(data) {
        this.name = data.name;
        this.description = data.description;
        this.author = data.author;
        this.url = data.url;
        this.downloads = data.downloads;
        this.stars = data.stars;
        this.selector = data.selector; // *** REMEMBER TO ADD THIS IF YOU ADDED IT TO THE DATA OBJECTS ** //

        this.getFormattedDownloads = function () {
            return this.downloads.toLocaleString();
        };

        this.getFormattedStars = function () {
            return this.stars.toLocaleString();
        };
    }

    /*********************
     * Utility functions
     *********************/

    // Returns today's date, formatted
    var getTodaysDate = function () {
        var today = new Date();
        return today.toDateString();
    };

    // Returns DOM element by id.
    
    var getEl = function (id) {
        return document.getElementById(id);
    }

    //Write's the package object's data to the appropriate DOM elements utilizing the package selector property.
    
    
    var writePackageInfo = function (extension) {
        // Get reference to DOM elements
        var selector = extension.selector,
            nameEl = getEl(selector + '-name'),
            descEl = getEl(selector + '-description'),
            authEl = getEl(selector + '-author'),
            downloadEl = getEl(selector + '-downloads'),
            starsEl = getEl(selector + '-stars');

        // Write package data to DOM elements
        nameEl.textContent = extension.name;
        descEl.textContent = extension.description;
        authEl.textContent = extension.author;
        downloadEl.textContent = extension.getFormattedDownloads();
        starsEl.textContent = extension.getFormattedStars();
    }

    // Write date
    dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    // Write package data one-by-one
    var HTMLSnippets = new Extension(data[0]);
    writePackageInfo(HTMLSnippets);

    var CSSPEEK = new Extension(data[1]);
    writePackageInfo(CSSPEEK);

    var OpenBrowser = new Extension(data[2]);
    writePackageInfo(OpenBrowser);

}());