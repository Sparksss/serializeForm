const serializeForm = (f) => {
	var obj = {};
	Object.entries(f).map((cur, i) => {
		if (cur[1].name) {
			if (cur[1].type === 'checkbox' || cur[1].type === 'radio') {
				if (cur[1].checked) {
					return obj[cur[1].name] = cur[1].value;
				}
			} else {
				return obj[cur[1].name] = cur[1].value === undefined ? '' : cur[1].value;
			}
		}
	});
	return obj;
};

export default serializeForm;
