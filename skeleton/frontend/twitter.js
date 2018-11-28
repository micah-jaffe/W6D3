const FollowToggle = require('./follow_toggle.js');

$(function() {
  // debugger;
  $('button.follow-toggle').each((idx, el) => {
    return new FollowToggle(el);
  });
});