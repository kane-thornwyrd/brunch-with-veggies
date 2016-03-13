class Router extends Backbone.Router {
  constructor(){
    super();
    this.routes = {
      '': 'index'
    };
    this._bindRoutes();
  }

  index(){
    console.log('Index route');
  }
}
console.log(Router);
export default Router ;
