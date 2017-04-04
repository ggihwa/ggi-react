import _ from 'lodash';

function component () {
	var element = document.createElement('div');

	/* lodash is required for the next line to work */
	element.innerHTML = _.join(['Hello111','webpack'], ' ');

	return element;
}

document.body.appendChild(component());