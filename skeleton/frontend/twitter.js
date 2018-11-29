const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js')

$(function() {
  $('button.follow-toggle').each((idx, el) => {
    return new FollowToggle(el);
  });
  
  $('.users-search').each((idx, el) => {
    return new UsersSearch(el);
  });
});