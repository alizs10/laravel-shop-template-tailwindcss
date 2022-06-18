function toggleFilters() { 
    $('body').toggleClass('overflow-hidden');
    $('#filters').toggleClass('hidden');
 }
function togglePriceFilter(btn) { 
   $(btn).parent().children().eq(1).toggleClass('hidden');

 }
function toggleCategoryFilter(btn) { 
   $(btn).parent().children().eq(1).toggleClass('hidden');

 }

 function toggleProductsExistFilter(btn)
 {
    $(btn).parent().toggleClass('justify-end bg-gray-200 dark:bg-gray-700 bg-red-500')
 }