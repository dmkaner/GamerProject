Games = new Mongo.Collection('games');

Template.popularGames.helpers({
  game: function(){
    return Games.find({});
  }
});
