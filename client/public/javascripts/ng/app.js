/**
 * Created by 肉仔强 on 14-3-14.
 */
var app = angular.module('tsq',[
    'ui.bootstrap',
    'tsq.services'
]);


//Setting up Restful Server
window.restful = {
    baseURL: "http://218.244.151.201:8000/"
};