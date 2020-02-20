                            /*BUTTON Load More*/
/***********************************************************************/

document.getElementsByTagName("section")[4].style.display = "none";
document.getElementsByTagName("section")[5].style.display = "none";

function viewMoreGood() {
    document.getElementsByTagName("section")[4].style.display = "";
    document.getElementsByTagName("section")[5].style.display = "";
}



                            /*BUTTON UP*/
/***********************************************************************/
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 800);
    });
});
/***********************************************************************/