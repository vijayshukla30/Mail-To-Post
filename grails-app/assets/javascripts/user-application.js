// This is a manifest file that'll be compiled into application.js.
//
// Any JavaScript file within this directory can be referenced here using a relative path.
//
// You're free to add application-wide JavaScript to this file, but it's generally better
// to create separate JavaScript files as needed.
//
//= require user/jQuery-2.1.4.min.js
//= require user/bootstrap.min.js
//= require user/bootstrap-checkbox-radio.js
//= require user/chartist.min.js
//= require user/bootstrap-notify.js
//= require user/paper-dashboard.js
//= require user/demo.js
//= require user/jplist.js
//= require user/jplist.min.js
//= require_self

if (typeof jQuery !== 'undefined') {
    (function ($) {
        $('#spinner').ajaxStart(function () {
            $(this).fadeIn();
        }).ajaxStop(function () {
            $(this).fadeOut();
        });
    })(jQuery);
}