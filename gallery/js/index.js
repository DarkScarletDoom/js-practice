$(function() {

    let images = [
        'img/rx7_fc.jpg',  // index = 0
        'img/rx7_fd.jpg',  // index = 1
        'img/s13.jpg',     // index = 2
        'img/supra.jpg',   // index = 3
    ];

    function make_the_main_image(id){
        console.log(images[id]);
        $('.main_img').css('background-image', 'url(' + images[id] + ')');
    }

    function highlight(content){
            content.toggleClass('active');

            console.log(content);
    }

    $(".photo").click(function() {

        let conteiner = $($(this));
        let id_img = this.id;

        // console.log(id_img, images[id_img]);
        highlight(conteiner);
        // console.log(conteiner);
        make_the_main_image(id_img);
    });
     // set interval
});



/*
if(is_active) {
    remove
} else {
    add class
}
*/
