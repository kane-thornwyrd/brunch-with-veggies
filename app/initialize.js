import Router from 'routers/main';
import ReactDOM from 'react-dom';
import React from 'react';

class Application{
  constructor(){
    new Router();
    Backbone.history.start({pushState:true});
  }
}

$(() => {
  new Application();
});
