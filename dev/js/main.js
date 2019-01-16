/* frameworks */
//=include ../../dist/bower_components/jquery/dist/jquery.js
//=include ../../dist/bower_components/moff/dist/moff.min.js
//=include ../../dist/bower_components/fullpage.js/vendors/scrolloverflow.min.js
//=include ../../dist/bower_components/fullpage.js/dist/jquery.fullpage.min.js
//=include ../../dist/bower_components/jquery-ui/jquery-ui.min.js

/* libs */
//=include lib/modernizr-custom.js

/* plugins */

/* separate */
//=include helpers/object-fit.js
//=include separate/global.js

/* components */


window.moffConfig = {
	// Website CSS breakpoints.
	// Default values from Twitter Bootstrap.
	// No need to set xs, because of Mobile first approach.
	breakpoints: {
		sm: 768,
		md: 992,
		lg: 1200
	},
	loadOnHover: true,
	cacheLiveTime: 2000
};

// the main code
