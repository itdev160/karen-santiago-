/**
 * Wrap everything in an IIFE (Immediately Invoked Function Expression) to keep
 * our variables constrained to the scope of this function and out of the global scope.
 */
(function () {
/******************************************************
* Package data and constructor objects
*******************************************************/

    var data = [
        {
        name: "The Sims 4: Cats and Dogs",
        description:
            "Cats and Dogs was my first ever expansion pack to the game. When you buy the pack the first thing you will notice is that you have unlocked Brindleton Bay, a new world." +
            " Brindleton Bay is a family outdoor centered world where you can raise your kids and animals comfortably. Some attractions to Brindleton Bay are bars, cat hangouts, and animal parks. A very lovely world overall. The main and obvious thing about the cats and dogs" +
            " expansion pack is that it allows users to create as well as adopt cats & dogs. Once you have your little fur animals you can bond" +
            " by daily interactions with them such as: petting, playing, feeding, and training them. My favorite part about this expansion pack is that the user" +
            " can become a vet and run their own veterinary clinic giving you full control of all running operations.",
        rating: "9.2/10",
        price: 25.14,
        url:
            " https://www.g2a.com/en-us/the-sims-4-cats-dogs-origin-pc-key-global-i10000081892002",
        selector: "p1",
        },
        {
        name: "The Sims 4: Vampires",
        description:
        "Buying the Vampires expansion pack gives the user access to Forgotten Hollow, a dark mist-covered land perfect for vampires to live. " +
            "You can create a vampire and design them any way you want. If you already have a non vampire sim and want them to be a vampire you can travel to Forgotten Hollow and ask" +
            " a vampire to bite you and you should turn into one shortly after. Once you are a vampire you can unleash supernatural powers . You can balance your skills by taking on weaknesses" +
            " and unlock new powers by winning epic duels to advance your rank. The last thing the vampire pack offers your sim is living an immortal life. CAUTION: Avoid sunlight and garlic foods.",
        rating: "8.8/10",
        price: 15.58,
        url:
            " https://www.g2a.com/the-sims-4-vampires-origin-key-global-i10000033404001?adid=dsab-cpc-US-en-rlsa-c-319884854313&id=37&gclid=Cj0KCQjwxNT8BRD9ARIsAJ8S5xYEVW6qL4q2RLwa_9ILVG3uV4vpWpxlxQOs4a4SDenrxiLs1IWGfS0aAqQKEALw_wcB&gclsrc=aw.ds",
        selector: "p2",
        },
        {
        name: "The Sims 4: City Living",
        description:
            "City Living expansion pack allows users to explore the city of San Myshuno, a densely populated city that has unique neighborhoods allowing your sims plenty of exploring time." +
            " The city of San Myshuno includes an Arts Quarter, Fashion District, Karaoke Bar, and a Spice Market. Festivals are a great opportunity to enrich your Sims. City Living allows you to watch street" +
            " performers, enter competitions, and meet a wide variety of sims from every walk of life. Two final things City Living gives is the opportunity to own an apartment, where you will have to balance the charm" +
            " of your unit to upgrade to a Skyscraper Penthouse, and Metropolitan careers, where you can be a Politician, Social Media Influencer, or Food or Art Critic.",
        rating: "9.1/10",
        price: 25.19,
        url:
            " https://www.g2a.com/en-us/the-sims-4-city-living-origin-key-global-i10000029993001",
        selector: "p3",
        },
        {
        name: "The Sims 4: UI Cheats Extension",
        description:
            "This mod enables the UI cheats extension and allows you to use various cheats by directly clicking on the UI, as opposed to typing a command. Some of the features from this mod that I find myself using" +
            " on a daily basis includes: Left click on the money counter to gain $1000, left click on money bar to set or add money amount, left click on sims needs bar to increase sims stats, and left click on other sims to increase love/friendship bar " +
            " making other sims fall in love with you quicker. Please visit the download website for full mod details.",
        rating: "10/10",
        price: 0.0,
        url: " https://www.patreon.com/posts/ui-cheats-v1-14-26240068",
        selector: "p4",
        },
        {
        name: "The Sims 4: MC Command Center",
        description:
            " MC Command Center allows users to access the command center that allows you to access/ edit the MCC Settings, MC CAS, MC Career, MC Pregnancy, MC Woohoo, etc. For example, the MC Pregnancy" +
            " gives users options of not allowing your sims to get pregnant, risky woohoo, pregnancy end, change partner, and much more! Please visit the download URL for full details about the mod!",
        rating: "7.3/10",
        price: 0.0,
        url: " https://deaderpool-mccc.com/#/releases",
        selector: "p5",
        },
        {
        name: "The Sims 4: Slice of Life",
        description:
            " Slice of Life mod focuses on adding more realism to the game. This mod adds physical changes to sims based on mood, new buffs, and a cellphone menu which is very similar to the social" +
            " media mod! Some of the things that this mod does are appearance changes (blush, acne, etc), personality system, emotion overhaul, menstrual cycle, and much more! Please check the download link for more" +
            " details about this mod!",
        rating: "9.4/10",
        price: 0.0,
        url: " https://www.kawaiistaciemods.com/post/slice-of-life-mod",
        selector: "p6",
        }
    ];

    function Sims(data) {
        this.name = data.name;
        this.description = data.description;
        this.rating = data.rating;
        this.price = data.price;
        this.url = data.url;
        this.selector = data.selector; // *** REMEMBER TO ADD THIS IF YOU ADDED IT TO THE DATA OBJECTS ** //

        this.getFormattedPrice = function () {
        return this.price.toLocaleString();
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

    var getEl = function (id) {
        return document.getElementById(id);
    };

    var writePackageInfo = function (sims) {
        // Get reference to DOM elements
        var selector = sims.selector,
            nameEl = getEl(selector + "-name"),
            descEl = getEl(selector + "-description"),
            ratingEl = getEl(selector + "-rating");
            priceEl = getEl(selector + "-price");
            urlEl = getEl(selector + "-url");

    // Write package data to DOM elements
        nameEl.textContent = sims.name;
        descEl.textContent = sims.description;
        ratingEl.textContent = sims.rating;
        priceEl.textContent = sims.price;
        urlEl.textContent = sims.url;
    };

    // Write date
    dateEl = getEl("date");
    dateEl.textContent = getTodaysDate();

    // Write package data one-by-one
    var CatsandDogs = new Sims(data[0]);
    writePackageInfo(CatsandDogs);

    var Vampires = new Sims(data[1]);
    writePackageInfo(Vampires);

    var CityLiving = new Sims(data[2]);
    writePackageInfo(CityLiving);

    var UI = new Sims(data[3]);
    writePackageInfo(UI);

    var MC = new Sims(data[4]);
    writePackageInfo(MC);

    var SliceofLife = new Sims(data[5]);
    writePackageInfo(SliceofLife);

    var StepOne = new Sims(data[6]);
    writePackageInfo(StepOne);
}());