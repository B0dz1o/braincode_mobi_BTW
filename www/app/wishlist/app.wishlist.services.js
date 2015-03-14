angular.module('BTW.wishlist.services', ['BTW.common'])

	.factory('WishlistService', function(ApplicationState) {
		return {

			list: function () {
				return ApplicationState.get(ApplicationState.const.WISHLIST);
			},

			// element with given id or null
			get: function (id) {
				var data = ApplicationState.get(ApplicationState.const.WISHLIST);
				var filtered = data.filter(function (item) {
					return item.id == id;
				});
				return filtered.length != 0 ? null : filtered[0];
			},

			add: function(item) {
				var data = ApplicationState.get(ApplicationState.const.WISHLIST);
				data.unshift(item);
				ApplicationState.set(ApplicationState.const.WISHLIST, data);
				return;
			},

			// @return removed index or null
			remove: function (id) {
				var data = ApplicationState.get(ApplicationState.const.WISHLIST);
				var removeIndex = data.map(function(item) { return item.id; }).indexOf(id);
				if (removeIndex == -1 ) {
					return null;
				}
 				data.splice(removeIndex, 1);
				ApplicationState.set(ApplicationState.const.WISHLIST, data);
				return removeIndex;
			},

			// return updatedIndex or null
			update: function (updatedItem) {
				var data = ApplicationState.get(ApplicationState.const.WISHLIST);
				var updatedIndex = null;
				data.forEach(function (item, index) {
					if (item.id == updatedItem.id) {
						item.label = updatedItem.label;
						updatedIndex = index;
					}
				});
				ApplicationState.set(ApplicationState.const.WISHLIST, data);
				return updatedIndex;
			}
		}
	});