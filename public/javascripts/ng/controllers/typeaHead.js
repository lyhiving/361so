/**
 * Created by 肉仔强 on 14-3-14.
 */
function TypeaheadCtrl($scope, Search, $http, Pdf, DownPdf, Mp3, DownMp3, Film, DownFilm, Zh, DownZh, Tw, DownTw, $timeout){
    $scope.qs = {};
    $scope.selection = 'zh';
    $scope.activeZh = 't-active';
    $scope.noResult = '对不起，没能找到你要的资源!';
    function wrongHandler(){
        window.location.reload();
    }
    function downHandler(target){
        var a = $("<a href='" + target  + "' target='_blank'>361so</a>").get(0);
        var e = document.createEvent('MouseEvents');
        e.initEvent( 'click', true, true );
        a.dispatchEvent(e);
    }
    $scope.set = function(i) {
        if (i == 1) {
            $scope.activeMp3 = '';
            $scope.activePdf = 't-active';
            $scope.activeZh = '';
            $scope.activeTw = '';
            $scope.activeFilm = '';
            $scope.selection = 'pdf';
        } else if (i==2) {
            $scope.activeMp3 = 't-active';
            $scope.activePdf = '';
            $scope.activeZh = '';
            $scope.activeTw = '';
            $scope.activeFilm = '';
            $scope.selection = 'mp3';
        } else if (i==3) {
            $scope.activeMp3 = '';
            $scope.activePdf = '';
            $scope.activeZh = 't-active';
            $scope.activeTw = '';
            $scope.activeFilm = '';
            $scope.selection = 'zh';
        }else if (i==4) {
            $scope.activeMp3 = '';
            $scope.activePdf = '';
            $scope.activeZh = '';
            $scope.activeTw = 't-active';
            $scope.activeFilm = '';
            $scope.selection = 'tw';
            Tw.query({qs: ''}, function (data) {
                $scope.items = data.map(function (item){
                    item.title = item.title.replace('[百度网盘下载]', '');
                    console.log("item.title:\n", item.title);
                    return item;
                });
            }, function (err) {
                alert('不好意思，出错了！');
            });
        }else if (i==5) {
            $scope.activeMp3 = '';
            $scope.activePdf = '';
            $scope.activeZh = '';
            $scope.activeTw = '';
            $scope.activeFilm = 't-active';
            $scope.selection = 'film';
        }
    };
    $scope.submit = function(s) {
        if (s=='pdf') {
            if (!$scope.qs.qsPdf) {
                return;
            }
            Pdf.query({qs: $scope.qs.qsPdf}, function (data) {
                var res = data.map(function (item) {
                    item.title = item.title.replace('- 虫虫钢琴', '').replace('PDF格式下载','');
                    return item;
                });
                if (!res.length) {
                    $scope.none = true;
                    $timeout(function () {
                        $scope.none = false;
                    }, 2000);
                } else {
                    $scope.items = res;
                }
            }, function (err) {
                alert('不好意思，出错了！');
                wrongHandler();
            });
        } else if (s=='mp3') {
            if (!$scope.qs.qsMp3 && !$scope.qs.qsMp3.name) {
                return;
            }
            var name = $scope.qs.qsMp3.name || $scope.qs.qsMp3;
            Mp3.query({qs: name}, function (data) {
                if (!data.length) {
                    $scope.none = true;
                    $timeout(function () {
                        $scope.none = false;
                    }, 2000);
                } else {
                    $scope.items = data;
                }
            }, function (err) {
                alert('不好意思，出错了！');
                wrongHandler();
            })
        } else if (s == 'zh') {
            if (!$scope.qs.qsZh) {
                return;
            }
            Zh.query({qs: $scope.qs.qsZh}, function (data) {
                if (!data.length) {
                    $scope.none = true;
                    $timeout(function () {
                        $scope.none = false;
                    }, 2000);
                } else {
                    $scope.items = data.map(function (item){
                        item.title = item.title.replace('百度云网盘之家', '').replace('百度', '');
                        console.log("item.title:\n", item.title);
                        return item;
                    });
                }
            }, function (err) {
                alert('不好意思，出错了！');
                wrongHandler();
            });
        } else if (s == 'tw') {
            Tw.query({qs: $scope.qs.qsTw}, function (data) {
                $scope.items = data.map(function (item){
                    item.title = item.title.replace('[百度网盘下载]', '');
                    console.log("item.title:\n", item.title);
                    return item;
                });
            }, function (err) {
                alert('不好意思，出错了！');
                wrongHandler();
            });
        } else if (s == 'film') {
            if (!$scope.qs.qsFilm) {
                return;
            }
            Film.query({qs: $scope.qs.qsFilm}, function (data) {
                if (!data.length) {
                    $scope.none = true;
                    $timeout(function () {
                        $scope.none = false;
                    }, 2000);
                } else {
                    $scope.items = data.map(function (item){
                        item.title = item.title.replace('百度云网盘之家', '').replace('百度', '');
                        return item;
                    });
                }
            }, function (err) {
                alert('不好意思，出错了！');
                wrongHandler();
            })
        }
    };

    $scope.getLocationFilm = function(val) {
        return $http.get('searchFilm', {
            params: {
                qs: val
            }
        }).then(function(res){
                var titles = [];
                angular.forEach(res.data, function(item){
                    titles.push(item.name);
                });
                return titles;
            });
    };

    $scope.getLocationMp3 = function(val) {
        return $http.get('searchMp3', {
            params: {
                qs:val
            }
        }).then(function(res){
                $scope.Mp3s = res.data;
                return $scope.Mp3s;
            });
    };
    $scope.getLocationZh = function(val) {
        return $http.get('search', {
            params: {
                qs:val
            }
        }).then(function(res){
                var titles = [];
                angular.forEach(res.data, function(item){
                    titles.push(item.word);
                });
                return titles;
            });
    };
    $scope.getLocationPdf = function(val) {
        return $http.get('searchPdf', {
            params: {
                qs:val
            }
        }).then(function(res){
                var titles = [];
                angular.forEach(res.data, function(item){
                    titles.push(item.word);
                });
                return titles;
            });
    };


/*    $scope.set = function (index) {
        $scope.index = index;
        $scope.submit($scope.index);
    }
    $scope.isHide = true;
    $scope.submit = function (index) {
        if (index == 4) {

            Tw.query({}, function (data) {
                $scope.items = data;
            }, function (err) {
                console.log('err:\n', err);
            });
        } else {

        if ($scope.index == 1) { //乐谱
            Pdf.query({qs: $scope.qsPdf}, function (data) {
                var res = data.map(function (item) {
                    item.title = item.title.replace('- 虫虫钢琴', '').replace('PDF格式下载','');
                    return item;
                });
                $scope.isHide = true;
                $scope.items = res;
            }, function (err) {
                console.log('err:\n', err);
            })
        }else if($scope.index == 2) {
                Mp3.query({qs: $scope.qsMp3}, function (data) {
                    $scope.isHide = true;
                    $scope.items = data;
                }, function (err) {
                    console.log('err:\n', err);
                })

        }else if($scope.index == 3) {
                console.log('index:\n', $scope.index);
                console.log('qs:\n', $scope.qsFilm);
                $scope.isHide = false;
                Film.query({qs: $scope.qsFilm}, function (data) {
                    $scope.isHide = true;
                    $scope.items = data;
                }, function (err) {
                    console.log('err:\n', err);
                })

        }
        }

    };*/
    $scope.down = function (id) {
        var s = $scope.selection;
        if (s=='pdf') {
            DownPdf.get({qs: id}, function (data) {
                downHandler(data.href);
//                window.open(data.href,'','height=500,width=800,top='+(screen.height-500)/2+',left='+(screen.width-800)/2);
            }, function (err) {
                alert('出错了！');
                wrongHandler();
            })
        } else if (s=='mp3') {
            DownMp3.get({qs: id}, function (data) {
//                window.location.href = data.href;
                downHandler(data.href);
            }, function (err) {
                alert('出错了！');
                wrongHandler();
            })
        } else if (s == 'zh') {
            DownZh.get({qs: id}, function (data) {
//                window.open(data.href,'','height=500,width=800,top='+(screen.height-500)/2+',left='+(screen.width-800)/2);
                downHandler(data.href);
            }, function (err) {
                alert('出错了！');
                wrongHandler();
            })
        } else if (s == 'tw') {
            DownTw.get({qs: id}, function (data) {
//                window.open(data.href[1] || data.href[0]);
                downHandler(data.href[1] || data.href[0]);
            }, function (err) {
                alert('出错了！');
                wrongHandler();
            });
        } else if (s == 'film') {
            DownFilm.get({qs: id}, function (data) {
//                window.open(data.href,'','height=500,width=800,top='+(screen.height-500)/2+',left='+(screen.width-800)/2);
                downHandler(data.href);
            }, function (err) {
                alert('出错了！');
                wrongHandler();
            })
        }
    }
}

