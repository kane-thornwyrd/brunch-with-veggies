class BaseCollection extends Backbone.Collection {
  /**
   * Here you can fix what the server is returning.
   */
  parse(data) {
    return data;
  }
}

export default BaseCollection;
