const APIUtil = require('./api_util.js');

class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.$input = $(this.$el.children()[0]);
    this.$ul = $(this.$el.children()[1]);
    
    this.handleInput();
  }
  
  handleInput() {
    this.$input.change(e => {
      e.preventDefault();
      // console.log(e.target.value);
      // debugger;
      APIUtil.searchUsers(e.target.value)
      .then((res) => {
        console.log(res);
        res.forEach(user => {
          this.$ul.append(`<li>${user.username}</li>`);
        });
      });
    });
  }
}

module.exports = UsersSearch;