var Xray = require('x-ray');
var x = Xray({
  filters: {
    trim: function (value) {
      return typeof value === 'string' ? value.trim() : value
    },
    get_at: function(value, at) {
    	try {
    		return value[at]
    	} catch(e) {
    		return value
    	}
    }
  }
});

x('http://monngonmoingay.com/tim-kiem-mon-ngon/', '.thanhvien_gr03_child', 
	[{
		url: 'a@href',
		content: x('a@href', {
			title: 'title | trim',
			image: '.hinh_monngon@src',
			description: '.description',
			video: '#iframe_youtube@href',
			detail_note: x('.detail_note', ['li']),
			detail_ingredients: x('.detail_ingredients ul', ['li | trim']),
			detail_cooking_html: '.detail_cooking@html | trim',
			detail_cooking: '.detail_cooking | trim'
		})
	}]
)
.paginate('.next.page-numbers@href')
.limit(150)
.write('monngonmoingay.com.json')