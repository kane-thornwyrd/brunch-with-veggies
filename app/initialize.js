import Router from 'routers/main';

class Application{
  constructor(){
    new Router();
    Backbone.history.start({pushState:true});
  }
}

$(function(){
  new Application();
});
