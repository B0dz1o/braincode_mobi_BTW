
angular.module('BTW.common', [])

.factory('ApplicationState', function ($window) {

        var set = function (key, object) {
            $window.localStorage.setItem(key, JSON.stringify(object));
        };

        var get = function (key, defaultValue) {
            return JSON.parse($window.localStorage.getItem(key)) || defaultValue;
        };

        var remove = function (key) {
            $window.localStorage.removeItem(key);
        };

        var clear = function () {
            $window.localStorage.clear();
        };

        return {
            set: set,
            get: get,
            remove: remove,
            clear: clear,
            const: {
                WISHLIST: 'wishList',
                USER: 'user',
                ORDER: 'order'
            }
        }
    })
;