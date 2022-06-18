function toggleFilters() {
   $('body').toggleClass('overflow-hidden');
   $('#filters').toggleClass('hidden');
}
function togglePriceFilter() {
   $('#price-filter').children().eq(1).toggleClass('hidden');

}
function toggleCategoryFilter() {
   $('#category-filter').children().eq(1).toggleClass('hidden');

}

function toggleProductsExistFilter(btn) {
   $(btn).parent().toggleClass('justify-end bg-gray-200 dark:bg-gray-700 bg-red-500')
}

function toggleSubCategoryFilter(cat_filter_id) {
   $('[data-parent-id="' + cat_filter_id + '"]').toggleClass('hidden')

   if ($('[data-parent-id="' + cat_filter_id + '"]').hasClass('hidden')) {
      let categories = $('span[data-parent-id]')
      if (categories.length > 0) {
         for (let index = 0; index < categories.length; index++) {
            const cat = categories[index];
            $('[data-parent-id="' + (cat_filter_id + index + 1) + '"]').addClass('hidden')
         }
      }
   }

}

