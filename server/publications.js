


Meteor.startup(function(){

  Meteor.publish("posts", function () {
    return Posts.find();
  });
  Meteor.publish("statistics", function () {
    try{
      return Statistics.find({}, {fields: {
        'total_count': true,
        'list_count': true,
        'update_count': true,
        'delete_count': true,
        'get_count': true,
        'insert_count': true
      }});
    }catch(error){
      console.log(error);
    }
  });


  if((Statistics.findOne({_id: 'configuration'}) == null)) {
    Statistics.insert({
      _id: 'configuration',
      'total_count': 0,
      'list_count': 0,
      'update_count': 0,
      'delete_count': 0,
      'get_count': 0,
      'insert_count': 0,
      'is_statistics_panel_visible': true,
      'is_interface_panel_visible': true,
      'is_database_panel_visible': true
    })
  };

  if((Posts.find().count() == 0)) {
    Posts.insert({
      x: Date.UTC(2011, 3, 1),
      title: "Lorem ipsum...",
      text: "CRASHED TODAY",
      user: "victor",
      dateCreated: Date()
    });
    Posts.insert({
      x: Date.UTC(2011, 3, 12),
      title: "So Many Cats",
      text: "LOLLER",
      user: "victor",
      dateCreated: Date()
    });
    Posts.insert({
      x: Date.UTC(2011, 3, 15),
      title: "Not enough cats.",
      text: "SKATES",
      user: "victor",
      dateCreated: Date()
    });
    Posts.insert({
      x: Date.UTC(2011, 3, 5),
      title: "Lorem ipsum...",
      text: "CRASHED TODAY",
      user: "victor",
      dateCreated: Date()
    });
    Posts.insert({
      x: Date.UTC(2011, 3, 7),
      title: "So Many Cats",
      text: "LOLLER",
      user: "clement",
      dateCreated: Date()
    });
    Posts.insert({
      x: Date.UTC(2011, 3, 11),
      title: "Not enough cats.",
      text: "SKATES",
      user: "clement",
      dateCreated: Date()
    });
  };

});
