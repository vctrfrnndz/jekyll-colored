module.exports = function(grunt) {
	grunt.initConfig({
		less: {
			development: {
		    	options: {
		    		paths: ["assets/less"]
		    	},
		    	files: {
		    		"assets/css/main.css": "assets/less/main.less",
		    		"assets/css/main.medium.css": "assets/less/main.medium.less",
		    		"assets/css/main.large.css": "assets/less/main.large.less"
		    	}
			}
		},
		watch: {
            files: "assets/less/*",
            tasks: ["less"]
        }
	});

	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
};

