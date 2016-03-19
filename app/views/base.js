import exempleTemplate from './templates/exemple';

class BaseView extends Backbone.View {

  constructor(){
    super();
    this.template = exempleTemplate;
  }

  initialize(){
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
  }

  render() {
    this.$el.html(this.template(this.presenter()));
    return this;
  }

  presenter() {
    var out = {}, modelJSON = this.model ? this.model.toJSON() : {};

    _.extend(out, modelJSON, {
      myCustomKey: 'CustomValue'
    })
    return out;
  }
}

export default BaseView;
