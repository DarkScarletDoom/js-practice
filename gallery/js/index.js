$(function() {

    let images = [
        '../img//rx7_fc.jpg',  // index = 0
        '../img//rx7_fd.jpg',  // index = 1
        '../img//s13.jpg',     // index = 2
        '../img//supra.jpg',   // index = 3
    ];

    function make_the_main_image(content){
        console.log(content.className);
        /*if(content.className == 'img_2') {
            ('.main_img').css('background-image', images[1]);
            console.log(content.className);
        }*/
        
    }

    function highlight(content){
        content.toggleClass('highlight');
    }

    $(".photo").click(function() {
        let conteiner = $($(this));
        /*console.log(conteiner);*/
        highlight(conteiner);
        make_the_main_image(conteiner);
    });

});