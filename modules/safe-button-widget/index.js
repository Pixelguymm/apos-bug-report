module.exports = {
  extend: '@apostrophecms/widget-type',
  options: {
    label: 'Safe Button'
  },
  fields: {
    add: {
      _page: {
        label: 'Page',
        type: 'relationship',
        withType: '@apostrophecms/page',
        required: true,
        max: 1,
        builders: {
          project: {
            _url: 1
          }
        }
      }
    }
  }
};
