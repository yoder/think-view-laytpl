const helper = require('think-helper');
const laytpl = require('laytpl');
const path = require('path')

module.exports = class {
	constructor(viewFile, viewData, config) {
		this.viewFile = viewFile;
		this.viewData = viewData;
		this.config = config;
		this.handleOptions = { ...config.options, root: path.dirname(viewFile) }
	}
	async render() {
		if (helper.isFunction(this.config.beforeRender)) {
			this.config.beforeRender(laytpl, this.handleOptions)
		};
		laytpl.config(this.handleOptions);
		return new Promise((resolve, reject) => {
			laytpl.renderFile(this.viewFile, this.viewData, (err, result) => {
				if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			});
		})
	}
};