//==============================================================================
// the following is a REST API that only uses the POST portion of the HTTP protocol
// and is suitable for automated browser testing

// be aware that POSTS refers to the HTTP protocol
// while 'posts' and 'Posts' refers to the weblog example used in the Meteor Cookbook
// this particular example has a slight bit of name-collision occurring


// api:      http://localhost:3000/api/find/posts
// example:  http://localhost:3000/api/find/posts
Router.route('/api/posts', function(){
  if (this.request.method == 'GET') {
    this.response.statusCode = 200;
    this.response.setHeader("Content-Type", "application/json");
    this.response.setHeader("Access-Control-Allow-Origin", "*");
    this.response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    this.response.end(JSON.stringify(
      Posts.find().fetch()
    ));
  } else if (this.request.method == 'POST') {
    this.response.statusCode = 200;
    this.response.setHeader("Content-Type", "application/json");
    this.response.setHeader("Access-Control-Allow-Origin", "*");
    this.response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    this.response.end(JSON.stringify(
      Posts.insert(this.request.body)
    ));
  } else {
    this.response.statusCode = 405;
    this.response.end("Invalid Request Type");
  };
}, {where: 'server'});

// api:      http://localhost:3000/api/find/post/:postId
// example:  http://localhost:3000/api/find/post/314159
Router.route('/api/posts/:postId', function(){
  if (!Posts.findOne({_id: this.params.postId})) {
    this.response.statusCode = 404;
    this.response.end("Invalid Request Type");
  } else if (this.request.method == 'GET') {
    this.response.statusCode = 200;
    this.response.setHeader("Content-Type", "application/json");
    this.response.setHeader("Access-Control-Allow-Origin", "*");
    this.response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    this.response.end(JSON.stringify(
      Posts.findOne({_id: this.params.postId })
    ));
  } else if (this.request.method == 'PUT') {
    Posts.update({_id: this.params.postId },{$set: this.request.body});
    this.response.statusCode = 200;
    this.response.setHeader("Content-Type", "application/json");
    this.response.setHeader("Access-Control-Allow-Origin", "*");
    this.response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    this.response.end(JSON.stringify(
      Posts.findOne({_id: this.params.postId })
    ));
  } else if (this.request.method == 'DELETE') {
    this.response.statusCode = 200;
    this.response.setHeader("Content-Type", "application/json");
    this.response.setHeader("Access-Control-Allow-Origin", "*");
    this.response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    this.response.end(JSON.stringify(
      Posts.remove({_id: this.params.postId })
    ));
  } else {
    this.response.statusCode = 405;
    this.response.end("Invalid Request Type");
  };
}, {where: 'server'});

Router.route('/api/posts/search/:user', function(){
  if (this.request.method == 'GET') {
    this.response.statusCode = 200;
    this.response.setHeader("Content-Type", "application/json");
    this.response.setHeader("Access-Control-Allow-Origin", "*");
    this.response.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    this.response.end(JSON.stringify(
      Posts.find( { user: this.params.user } ).fetch()
    ));
  } else {
    this.response.statusCode = 405;
  };
}, {where: 'server'});


