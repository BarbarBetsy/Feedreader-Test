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
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url).not.toBe('');
            }
        });

        // check if all feeds have a name
        it('have name', function () {
            for (i = 0; i < allFeeds.length; i += 1) {
                expect(allFeeds[i].name).toBeDefined();
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
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });
    });

    // check the new feed selection
    describe('New Feed Selection', function () {
        let feedAfterFirstLoad;
        let feedAfterSecondLoad;

        // store the header of the first item in two different feeds
        beforeEach(function (done) {
            loadFeed(0, function () {
                feedAfterFirstLoad = ($('.entry')[0].innerHTML);
                loadFeed(1, function () {
                    feedAfterSecondLoad = ($('.entry')[0].innerHTML);
                    done();
                })
            })
        })

        // check if the content is different
        it('is different from old Feed Selection', function () {
            expect(feedAfterFirstLoad).not.toEqual(feedAfterSecondLoad);
        });
    });
});