define(['jquery', 'uiComponent', 'ko'], function ($, Component, ko) {
    'use strict';
    return Component.extend({
    defaults: {
    template: 'Mangoit_KoPractice/knockout-test-example'
    },
    initialize: function () {
    this._super();
    }
    });
    }
    );