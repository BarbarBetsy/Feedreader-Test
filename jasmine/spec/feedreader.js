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
                expect(allFeeds[i].url).not.toBe(0);
            }
        });

        // check if all feeds have a name
        it('have name', function () {
            for (i = 0; i < allFeeds.length; i += 1) {
                expect(allFeeds[i].name).not.toBe(0);
            }
        });
    });

    // check the menu
    describe('The Menu', function () {

        // define the hidden/visible positios for the menu
        let hidden = Object({
            top: 56,
            left: -192
        });
        let visible = Object({
            top: 56,
            left: 0
        });

        // check if position is hidden
        it('is hidden by default', function () {
            expect($('.slide-menu').position()).toEqual(hidden);
            // expect($('.slide-menu').css('transform')).toBe(hidden);
        });

        // only works bc transformation animation is turned of!!!
        //TODO: find out how to slow the testing down so that the menu is in final position when tested
        
        // check if menu opens/closes on click
        it('toggles visible/hidden when hamburger is clicked', function () {

            // push the button
            $('.icon-list').trigger('click');
            //check if position is visible
            expect($('.slide-menu').position()).toEqual(visible);

            // un-push the button
            $('.icon-list').trigger('click');
            //check if position is hidden
            expect($('.slide-menu').position()).toEqual(hidden);
        });

    });

    /* TODO: Write a new test suite named "Initial Entries" */

    /* TODO: Write a test that ensures when the loadFeed
     * function is called and completes its work, there is at least
     * a single .entry element within the .feed container.
     * Remember, loadFeed() is asynchronous so this test will require
     * the use of Jasmine's beforeEach and asynchronous done() function.
     */

    /* TODO: Write a new test suite named "New Feed Selection" */

    /* TODO: Write a test that ensures when a new feed is loaded
     * by the loadFeed function that the content actually changes.
     * Remember, loadFeed() is asynchronous.
     */
}());