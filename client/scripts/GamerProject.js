GameList = new Mongo.Collection('gamelist');

Meteor.subscribe('gamelist');

platformListSchema = new SimpleSchema({
  platform: {
    type: String,
    label: "Platform"
  }
});

GameListSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title"
  },
  gameRank: {
    type: String,
    label: "GameRank"
  },
  platform: {
    type: [platformListSchema]
  },
  auth: {
    type: String,
    label: "Author",
    autoValue: function(){
      return this.userId
    },
    autoform: {
      type: "hidden"
    }
  }
});

GameList.attachSchema(GameListSchema);

Template.home.helpers({
    eachGame: function(){
      return GameList.find({"gameRank": "fire"});
    }
});
