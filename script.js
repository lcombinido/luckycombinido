var type = new Typed('.typing-text',{
    strings: [ '', 'web designer', 'front end developer', 'software engineer'],
    typeSpeed: 120,
    loop:true
});

let themeColor = document.querySelectorAll('.theme-toggler span');
themeColor.forEach(color => color.addEventListener('mouseover', () =>{
    let background = color.style.background
    document.querySelector('body').style.background = background;
}));

$(document).ready(function(){

    $('#menu-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){

        $('#menu-bars').removeClass('fa-times');
        $('header').removeClass('toggle');
    })

});