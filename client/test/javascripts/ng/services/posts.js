/**
 * Created by 肉仔强 on 14-3-14.
 */
angular.module('tsq.services').factory("Pdf", function($resource){
    return $resource(window.restful.baseURL + 'pdf', {
    });
});
angular.module('tsq.services').factory("DownPdf", function($resource){
    return $resource(window.restful.baseURL + 'downPdf', {
    });
});
angular.module('tsq.services').factory("Mp3", function($resource){
    return $resource(window.restful.baseURL + 'mp3', {
    });
});
angular.module('tsq.services').factory("DownMp3", function($resource){
    return $resource(window.restful.baseURL + 'down', {
    });
});
angular.module('tsq.services').factory("Zh", function($resource){
    return $resource(window.restful.baseURL + 'zh', {
    });
});
angular.module('tsq.services').factory("DownZh", function($resource){
    return $resource(window.restful.baseURL + 'downZh', {
    });
});
angular.module('tsq.services').factory("Film", function($resource){
    return $resource(window.restful.baseURL + 'film', {
    });
});
angular.module('tsq.services').factory("DownFilm", function($resource){
    return $resource(window.restful.baseURL + 'downFilm', {
    });
});
angular.module('tsq.services').factory("Tw", function($resource){
    return $resource(window.restful.baseURL + 'tw', {
    });
});
angular.module('tsq.services').factory("DownTw", function($resource){
    return $resource(window.restful.baseURL + 'downTw', {
    });
});
angular.module('tsq.services').factory("Search", function($resource){
    return $resource(window.restful.baseURL + 'search', {
    });
});