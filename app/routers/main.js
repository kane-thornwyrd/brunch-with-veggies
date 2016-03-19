import BaseView from '../views/base';

class Router extends Backbone.Router {
  constructor(){
    super();
    this.routes = {
      '': 'index'
    };
    this._bindRoutes();
  }

  index(){
    console.log('INDEX');
    var exempleView = new BaseView();
    $('#app').html(exempleView.render());
  }
}
export default Router ;
