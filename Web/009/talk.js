$(function() {
    $('#yes').click(function(event) {
        modal('我就知道小羊一定喜欢的。(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('不可以撒谎噢', A);
    });
});

function A() {
    modal('虽然嘴上说着不喜欢', B);
}

function B() {
    modal('其实一定很喜欢我吧', C);
}

function C() {
    modal('是吧', D);
}

function D() {
    modal('就像我喜欢小羊一样', E);
}

function E() {
    modal('今天也是非常喜欢', F);
}

function F() {
    modal('不不不', G);
}

function G() {
    modal('应该说是超级超级超级喜欢', H);
}

function H() {
    modal('对吧对吧', I);
}

function I() {
    modal('爱你呀。么么哒！', J)
}

function J() {
    modal('所以，再选择一次吧', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
