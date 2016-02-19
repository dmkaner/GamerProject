Games = new Mongo.Collection('games');

Template.body.helpers({
    eachGame: function(){
      return Games.find();
    }
});
