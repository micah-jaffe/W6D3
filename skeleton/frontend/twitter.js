const FollowToggle = require('./follow_toggle.js');

$(function() {
  $('button.follow-toggle').each((idx, el) => {
    const s = new FollowToggle(el);
  });
});