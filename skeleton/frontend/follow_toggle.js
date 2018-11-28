class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data('data-user-id');
    this.followState = this.$el.data('data-initial-follow-state');
    this.render();
    this.handleClick();
  }
  
  render() {
    if (this.followState === "unfollowed") {
      (this.$el).html("Follow!");
    } else {
      (this.$el).html("Unfollow!");
    }
  }
  
  handleClick() {
    this.$el.on('click', e => {
      e.preventDefault();
      if (this.followState === "unfollowed") {
        return $.ajax({
          method: 'POST',
          url: `users/${this.userId}/follow`
        });
      } else {
        return $.ajax({
          method: 'DELETE',
          url: `users/${this.userId}/follow`
        });
      }
      
    });
  }
  
}

module.exports = FollowToggle;