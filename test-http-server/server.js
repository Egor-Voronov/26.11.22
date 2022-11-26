export default {
	'/test/': function() {
		let str = '<ul>';
		
		for (let i = 1; i < 9; i ++) {
			str += '<li>' + i + '</li>';
		}
		
		str += '</ul>';
		
		return str;
	},
    '/test2/': function() {
		let arr = [1, 2, 3, 4, 5];
        let str
		
		for (let i = 1; i < arr.length; i ++) {
			str += '<h1>' + arr[i] + '</h1>';
		}
		
		return str;
	},
    '/page1/': function() {
		
	},
    '/page2/': function() {
		
	},
    '/page3/': function() {
		
	},
}