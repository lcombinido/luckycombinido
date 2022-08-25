var type = new Typed('.typing-text',{
    strings: [ '', 'web designer', 'front end developer', 'software engineer'],
    typeSpeed: 120,
    loop:true
});

let themeColor = document.querySelectorAll('.theme-toggler span');
themeColor.forEach(color => color.addEventListener('mouseover', () =>{
    let background = color.style.background
    document.querySelector('body').style.background = background;
    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');
}));

$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $('a').click(function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });

    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    
        if($(window).scrollTop() > 0){
            $('.top').show();
        }
        else{
            $('.top').hide();
        }   
    });
});



