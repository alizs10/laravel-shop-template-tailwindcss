var sidebarVisibility = false;
var categories = $('#categories');
var isOverCategories = false;

function toggleSidebar() {
    sidebarVisibility = !sidebarVisibility;
    $('aside').toggleClass('-right-full').toggleClass('right-0')
    $('#blur-back').toggleClass('hidden')
}

// $('#toggleCategories').on('mouseenter', function () {
    
    
//     // check if screen is large
//     if (!sidebarVisibility) {
//         categories.removeClass('lg:hidden')
//     }
// });

// // $('#toggleCategories').on('mouseleave', function () {
// //     if (!isOverCategories && !sidebarVisibility) {
// //         categories.addClass('lg:hidden')
// //     }
// // });


// categories.on('mouseenter', function () {
//     isOverCategories = true;
// })
// categories.on('mouseleave', function () {
//     isOverCategories = false;
//     categories.addClass('lg:hidden')
// })