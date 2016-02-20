GameList = new Mongo.Collection('gamelist');

GameList.allow({
  insert: function(userId, doc){
    return !!userId;
  }
});
