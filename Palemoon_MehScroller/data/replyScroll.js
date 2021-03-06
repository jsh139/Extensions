﻿/********************************************************************************************/
/*  Unofficial Meh.com Forum Reply Scroller                                                 */
/*  Copyright © 2015 Josh Hoffman.  All rights reserved.                                    */
/*                                                                                          */
/*  Do not modify without permission. No warranty expressed or implied.                     */
/********************************************************************************************/

(function () {
    self.port.on("scroll", replyScroll);

    function replyScroll() {
        var unreadElements = $('.unread');

        if (!$('#CommentCounter').length) {
            $('<input>').attr({
                type: 'hidden',
                id: 'CommentCounter',
                name: 'CommentCounter',
                value: '-1'
            }).appendTo('body');

            $('<div/>')
                .attr({
                    id: 'MessageDiv',
                    style: 'background:#E2E5EC; padding:3px 8px; position: fixed; top: 10px; right: 100px; border: 1px solid #747474; border-radius: 5px; display:none; z-index: 9999;'
                })
                .append('<span/>')
                .appendTo('body');
        }

        var i = parseInt($('#CommentCounter').val());

        if (unreadElements.length > 0) {
            /* Click the archive button in case there are unread replies in there */
            if ($('.show-comments').is(':visible'))
                $('.show-comments')[0].click();

            if (i >= unreadElements.length - 1) {
                i = -1;
                displayMessage('Reached end of thread, scrolling to first unread');
            }

            unreadElements[++i].scrollIntoView();
            $('#CommentCounter').val(i.toString());
        } else
            displayMessage('There are no unread replies in this thread');
    }

    function displayMessage(message) {
        $('#MessageDiv')
            .html('<span>' + message + '</span>')
            .fadeIn(500, function() {
                $('#MessageDiv').fadeOut(3000)
            });
    }
})();