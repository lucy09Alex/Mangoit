define(['jquery', 'uiComponent', 'ko'], function ($, Component, ko) {
    'use strict';
    return Component.extend({
    defaults: {
    template: 'MangoitSolutions_KoPractice/knockout-test-example'
    },
    initialize: function () {
    this._super();
    }
    });
    }
    );