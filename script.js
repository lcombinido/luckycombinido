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

    // smooth scrolling 

    // $('a[href*="#"]').on('click',function(e){

    //     e.preventDefault();
    
    //     $('html, body').animate({
            
    //         scrollTop : $($(this).attr('href')).offset().top, 
    //     },
    //         300,
    //         'linear'
    //     );
    // });
});
    



