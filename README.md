# think-view-laytpl
Use laytpl to render view files for ThinkJS 3.x

## Install

```
npm install think-view-laytpl
```

## How to Usage

edit config file `src/config/adapter.js`, add options:

```js
const laytpl = require('think-view-laytpl');
exports.view = {
	type: 'laytpl',
	common: {
		viewPath: path.join(think.ROOT_PATH, 'view'),
		extname: '.html',
		sep: '_' //seperator between controller and action
	},
	laytpl: {
		handle: laytpl,
		options: {
			open: '{{',		//分隔符-开始
			close: '}}',	//分隔符-结束
			cache: false,	//是否缓存
			min: true		  //是否开启压缩
		}
	}
}
```
