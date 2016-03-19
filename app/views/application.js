import layout from './templates/layout';
import BaseView from './base';

class ApplicationView extends BaseView {

  constructor(){
    super();
    this.template = layout;
  }

  presenter() {
    var out = {}, modelJSON = this.model ? this.model.toJSON() : {};
    _.extend(out, modelJSON, {})
    return out;
  }
}

export default ApplicationView;
