/********************************************************************************************/
/*  Unofficial Meh.com Forum Reply Scroller                                                 */
/*  Copyright © 2014 Josh Hoffman.  All rights reserved.                                    */
/*                                                                                          */
/*  Do not modify without permission. No warranty expressed or implied.                     */   
/********************************************************************************************/

if (document.getElementById("CommentCounter") == null) {
    var input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", "CommentCounter");
    input.setAttribute("id", "CommentCounter");
    input.setAttribute("value", "-1");

    document.body.appendChild(input);
}

var cc = document.getElementById("CommentCounter");
var i = parseInt(cc.getAttribute("value"));

var unreadComments = [];
var lis = document.querySelectorAll('li');

for (var x = 0; x < lis.length; x++)
    if (lis[x].className == "reply unread" || lis[x].className == "comment unread")
        unreadComments.push(lis[x]);

if (unreadComments.length == 0)
    alert('There are no unread replies in this thread');
else {
    if (i >= unreadComments.length - 1)
        i = -1;

    unreadComments[++i].scrollIntoView();

    cc.setAttribute("value", i.toString());
}