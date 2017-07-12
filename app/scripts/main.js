console.log('\'Allo \'Allo!');

import Vue from 'vue'

new Vue({
    el: '#list',
    data: {
        list: "<ul><li>HTML5 Boilerplate</li><li>Sass</li><li>Modernizr</li><li>jQuery</li><li>VueJS</li></ul>"
    }
});

var example1 = new Vue({
  el: '#example-1',
  data: {
    items: [
      { message: 'HTML5 Boilerplate' },
      { message: 'Sass' },
      { message: 'Modernizr' },
      { message: 'jQuery' },
      { message: 'VueJS' }
    ]
  }
});
