import ApplicationRouter from 'routers/application';
import ApplicationView from '../views/application';

class Application {

  constructor(){
    _.extend(this, Backbone.Events);

    this.view = new ApplicationView();

    this.router = new ApplicationRouter();

    ((events) => {
      for(let event in events){ this.on(event, this[events[event]]); }
    })({
      'global:domready' : 'start'
    });

    $(document).on( 'ready', event => this.trigger('global:domready') );

  }
  start(){
    $('#app').html(this.view.render().$el);
    Backbone.history.start({pushState:true});
  }
}

var app = new Application();
