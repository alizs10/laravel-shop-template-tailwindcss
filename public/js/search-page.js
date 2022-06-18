function toggleFilters() { 
    $('body').toggleClass('overflow-hidden');
    $('#filters').toggleClass('hidden');
 }

 function toggleProductsExistFilter(btn)
 {
    $(btn).parent().toggleClass('justify-end bg-gray-200 bg-red-500')
 }