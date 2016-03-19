import loaderTemplate from './templates/loader';

class BaseView extends Backbone.View {

  constructor(){
    super();
    this.animateClass = 'fade';
  }

  initialize(){
    _.extend(this, Backbone.Events);
    this.listenTo(this.model , 'change'               , this.render);
    this.listenTo(this.model , 'destroy'              , this.remove);
    this.listenTo(this.model , 'fetch:start'          , this.showLoader);
    this.listenTo(this.model , 'fetch:stop'           , this.hideLoader);
    this.on({
      'view:transitionStart' : this.showLoader,
      'view:transitionEnd'   : this.hideLoader
    });
  }

  render() {
    this.trigger('view:render');
    this.$el.html(this.template(this.presenter()));
    return this;
  }

  presenter() {
    this.trigger('view:presenter');
    var out = {}, modelJSON = this.model ? this.model.toJSON() : {};

    _.extend(out, modelJSON, {
      myCustomKey: 'CustomValue'
    });

    return out;
  }

  showLoader(){
    this.trigger('view:loaderOn');
    //TBI
    console.warn('Implementing your own showLoader would be "better".');
    this.$loader = $(loaderTemplate());
    this.$el.append(this.$loader);
  }

  hideLoader(){
    this.trigger('view:loaderOff');
    //TBI
    console.warn('Implementing your own hideLoader would be "better".');
    this.$loader.remove();
  }

  transitionTo(nextView){
    this.trigger('view:transitionToStart');
    this.$el.addClass(this.animateClass+'-out animated');
    this.$el.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd animationend', event => {
      nextView.render().transitionFrom(this);
      this.$el.removeClass(this.animateClass+'-out animated');
      this.trigger('view:transitionToEnd');
    });
  }

  transitionFrom(view){
    this.trigger('view:transitionFromStart');
    view.remove();
    this.$el.addClass(this.animateClass+'-in animated');
    this.$el.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd animationend', event => {
      this.$el.removeClass(this.animateClass+'-in animated');
      this.trigger('view:transitionFromEnd');
    });
  }
}

export default BaseView;
