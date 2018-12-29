// feedreader.js

$(function () {

    // check the feed
    describe('RSS Feeds', function () {

        // check if allFeeds are defined and not empty
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // check if all feeds have an URL
        it('have URL', function () {
            for (i = 0; i < allFeeds.length; i += 1) {
                expect(allFeeds[i].url).not.toBe('');
            }
        });

        // check if all feeds have a name
        it('have name', function () {
            for (i = 0; i < allFeeds.length; i += 1) {
                expect(allFeeds[i].name).not.toBe('');
            }
        });
    });

    // check the menu
    describe('The Menu', function () {

        // check if menu is hidden
        it('is hidden by default', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    // // check if menu opens/closes on click
    describe('Click on hamburger icon', function () {

        //check if position is visible after first click
        it('shows menu', function () {
            $('.icon-list').trigger('click');
            expect($('body').hasClass('menu-hidden')).not.toBe(true);
            //check if position is hidden after second click
            $('.icon-list').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    // check initial entries
    describe('Initial Entries', function () {

        beforeEach(function (done) {
            loadFeed(0, done);
        })

        //check if there is at least one entry
        it('exist', function (done) {
            expect($('.feed').children().length).toBeGreaterThan(0);
            done();
        });
    });

    // check the new feed selection
    describe('New Feed Selection', function () {
        // create feed to store header of first article of first feed
        let feed;

        // load feed 1 and check header of first article
        beforeEach(function (done) {
            loadFeed(0, function () {
                feed = ($('.entry')[0].textContent);
                done();
            });
        });

        //check if the headlines of the first article has changed
        it('is different from old Feed Selection', function (done) {
            // load feed 2
            loadFeed(1, function () {
                //check if headline of first article is different from before
                expect(($('.entry')[0].textContent)).not.toEqual(feed);
                done();
            });
        });
    });
});