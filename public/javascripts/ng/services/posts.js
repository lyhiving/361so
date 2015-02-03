/**
 * Created by 肉仔强 on 14-3-14.
 */
angular.module('tsq.services').factory("Pdf", function($resource){
    return $resource('pdf', {
    });
});
angular.module('tsq.services').factory("DownPdf", function($resource){
    return $resource('downPdf', {
    });
});
angular.module('tsq.services').factory("Mp3", function($resource){
    return $resource('mp3', {
    });
});
angular.module('tsq.services').factory("DownMp3", function($resource){
    return $resource('down', {
    });
});
angular.module('tsq.services').factory("Zh", function($resource){
    return $resource('zh', {
    });
});
angular.module('tsq.services').factory("DownZh", function($resource){
    return $resource('downZh', {
    });
});
angular.module('tsq.services').factory("Film", function($resource){
    return $resource('film', {
    });
});
angular.module('tsq.services').factory("DownFilm", function($resource){
    return $resource('downFilm', {
    });
});
angular.module('tsq.services').factory("Tw", function($resource){
    return $resource('tw', {
    });
});
angular.module('tsq.services').factory("DownTw", function($resource){
    return $resource('downTw', {
    });
});
angular.module('tsq.services').factory("Search", function($resource){
    return $resource('search', {
    });
});