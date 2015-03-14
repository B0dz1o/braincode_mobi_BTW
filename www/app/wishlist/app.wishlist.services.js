angular.module('BTW.wishlist.services', ['BTW.common'])

	.factory('WishlistService', function($localStorage, ApplicationState) {

		return {

			list: function () {
				return ApplicationState.get(ApplicationState.const.WISHLIST) || [];
			},

			// element with given id or null
			get: function (id) {
				var data = ApplicationState.get(ApplicationState.const.WISHLIST);
				var filtered = data.filter(function (item) {
					return item.id == id;
				});
				return filtered.length != 0 ? null : filtered[0];
			},

			// @return removed index or null
			delete: function (id) {
				var data = ApplicationState.get(ApplicationState.const.WISHLIST);
				var removeIndex = data.map(function(item) { return item.id; }).indexOf(id);
				if (removeIndex == -1 ) {
					return null;
				}
 				data.splice(removeIndex, 1);
				ApplicationState.set(ApplicationState.const.WISHLIST, data);
				return removeindex;
			},

			update: function (updatedItem) {
				var data = ApplicationState.get(ApplicationState.const.WISHLIST);
				data.forEach(function (item) {
					if (item.id === updatedItem.id) {
						item.label = updatedItem.label;
					}
				});
				ApplicationState.set(ApplicationState.const.WISHLIST, data);
			}
		};

	})
;