var categories = $('#categories');
function toggleSidebar() {
    $('aside').toggleClass('-right-full').toggleClass('right-0')
    $('#blur-back').toggleClass('hidden')
}


$('#toggleCategories').on('mouseenter', function () {
    // check if screen is large

    if (window.innerWidth > 1024) {
        categories.addClass('lg:grid');
        $('#blur-back').toggleClass('hidden lg:hidden')
    }
});

$('#toggleCategories').on('mouseleave', function (event) {
    var target = $(event.toElement)[0];
    if (window.innerWidth > 1024 && categories.find(target).length == 0) {
        categories.removeClass('lg:grid')
        $('#blur-back').toggleClass('hidden lg:hidden')
    }

});



categories.on('mouseleave', function () {
    if (window.innerWidth > 1024) {
        categories.removeClass('lg:grid')
        $('#blur-back').toggleClass('hidden lg:hidden')
    }
})