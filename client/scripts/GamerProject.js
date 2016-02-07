Games = new Meteor.collection('games');

GameSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title"
  },
  console: {
    type: String,
    label: "Console"
  },
  category: {
    type: String,
    label: "Category"
  }
  //Group Count

});

Games.attachSchema( GameSchema );
