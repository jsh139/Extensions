/********************************************************************************************/
/*  Unofficial Meh.com Forum Reply Scroller                                                 */
/*  Copyright © 2014 Josh Hoffman.  All rights reserved.                                    */
/*                                                                                          */
/*  Do not modify without permission. No warranty expressed or implied.                     */
/********************************************************************************************/

if (!$('#CommentCounter').length) {
    $('<input>').attr({
        type: 'hidden',
        id: 'CommentCounter',
        name: 'CommentCounter',
        value: '-1'
    }).appendTo('body');
}

var i = parseInt($('#CommentCounter').val());
var unreadElements = $('.unread');

if (unreadElements.length == 0)
    alert('There are no unread replies in this thread');
else {
    if (i >= unreadElements.length - 1)
        i = -1;

    unreadElements[++i].scrollIntoView();

    $('#CommentCounter').val(i.toString());
}