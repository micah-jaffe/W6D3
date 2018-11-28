const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor(el) {
    // debugger;
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');
    this.render();
    this.handleClick();
  }
  
  render() {
    if (this.followState === "unfollowed") {
      (this.$el).html("Follow!");
      (this.$el).prop("disabled", false);
    } else if (this.followState === "followed") {
      (this.$el).html("Unfollow!");
      (this.$el).prop("disabled", false);
    } else if (this.followState === "following") {
      (this.$el).prop("disabled", true);
    } else if (this.followState === "unfollowing") {
      (this.$el).prop("disabled", true);
    }  
  }
  
  handleClick() {
    this.$el.on('click', e => {
      e.preventDefault();
      if (this.followState === "unfollowed") {
        this.followState = "following";
        this.render();
        APIUtil.followUser(this.userId)
        .then(() => {
          this.followState = "followed";
          this.render();      
        });
      } else {
        this.followState = "unfollowing";
        this.render();
        return APIUtil.unfollowUser(this.userId)
        .then(() => {
          this.followState = "unfollowed";
          this.render();
        });
      }
    });
  }
}

module.exports = FollowToggle;