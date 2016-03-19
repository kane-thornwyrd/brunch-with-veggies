class ApplicationRouter extends Backbone.Router {
  constructor(){
    super();
    this.routes = {
      '': 'index'
    };
    this._bindRoutes();
  }

  index(){
  }
}
export default ApplicationRouter ;
