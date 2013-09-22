/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'vctrfrnndz\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-github' : '&#x67;',
			'icon-vimeo' : '&#x76;',
			'icon-twitter' : '&#x74;',
			'icon-facebook' : '&#x46;',
			'icon-stackoverflow' : '&#x53;',
			'icon-feed' : '&#x52;',
			'icon-chrome' : '&#x63;',
			'icon-credit-card' : '&#x43;',
			'icon-bug' : '&#x42;',
			'icon-image' : '&#x50;',
			'icon-googleplus' : '&#x47;',
			'icon-paypal' : '&#x24;',
			'icon-cc' : '&#x4c;',
			'icon-pencil' : '&#x77;',
			'icon-pen' : '&#x57;',
			'icon-firefox' : '&#x66;',
			'icon-IE' : '&#x69;',
			'icon-safari' : '&#x73;',
			'icon-user' : '&#x75;',
			'icon-talk' : '&#x22;',
			'icon-tag' : '&#x23;',
			'icon-reload' : '&#x61;',
			'icon-popup' : '&#x79;',
			'icon-nope' : '&#x78;',
			'icon-music' : '&#x4d;',
			'icon-menu' : '&#x6d;',
			'icon-mail' : '&#x45;',
			'icon-insta' : '&#x49;',
			'icon-heart' : '&#x33;',
			'icon-exit' : '&#x65;',
			'icon-document' : '&#x70;',
			'icon-disk' : '&#x64;',
			'icon-close' : '&#x58;',
			'icon-clock' : '&#x30;',
			'icon-book' : '&#x62;',
			'icon-arrowright' : '&#x72;',
			'icon-arrowleft' : '&#x6c;',
			'icon-dribbble' : '&#x44;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};