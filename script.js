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


console.log("Hello World")
