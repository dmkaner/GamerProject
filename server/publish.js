Meteor.publish('gamelist', function(){
  return GameList.find({});
});
