export default {
	generateId() {
		return Number((new Date()).getTime().toString() + (100 * Math.random()).toFixed(0).toString());
	}
};
