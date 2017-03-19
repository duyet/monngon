'use strict';

var _wordpressPostsCrawler = require('wordpress-posts-crawler');

var _wordpressPostsCrawler2 = _interopRequireDefault(_wordpressPostsCrawler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var articles = _wordpressPostsCrawler2.default.findAll({ url: 'http://monngonmoingay.com/tim-kiem-mon-ngon/' });
// expect array
console.log(articles);
