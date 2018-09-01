let currentSlide = 0;
let currentMargin = 0;

function animateWithMargin(direction) {
    if (currentSlide === 0 && direction < 0){
        currentMargin = -600;
        currentSlide = 6;
        $('#carousel-with-margin .frame .first').css('margin-left', currentMargin + '%');
    }
    else if (currentSlide === 6 && direction > 0) {
        currentMargin = 0;
        currentSlide = 0;
        $('#carousel-with-margin .frame .first').css('margin-left', currentMargin + '%');
    }
    else {
    currentSlide += direction;
    currentMargin = -currentSlide * 100;

    $('#carousel-with-margin .frame .first').css('margin-left', currentMargin + '%');
    }
}

let carousel = document.getElementById('carousel-with-margin');
carousel.children[0].addEventListener('click', function() { animateWithMargin(-1) });
carousel.children[carousel.children.length - 1].addEventListener('click', function() { animateWithMargin(1) });

// ===================
function CounterPlus(){
    let k = +$('.count').text();
    $('.count').text(++k);
}

let AddToCart = document.getElementsByClassName('wide');
for(let i=0 ; i<AddToCart.length; i++) {
    AddToCart[i].addEventListener('click', function () { CounterPlus() });
}

// ===================
let AddMoreProducts = document.getElementById('Add-more-featured-products');
AddMoreProducts.addEventListener('click', function () { MoreProducts() });

function MoreProducts() {
    let html = '<div class="product-item">    <div class="product-image-with-hover">        <div class="product-image"></div>        <div class="product-image-actions">            <button class="product-button"><i class="far fa-heart"></i></button>            <button class="product-button"><i class="fa fa-random" aria-hidden="true"></i></button>            <button class="product-button"><i class="fa fa-clock-o" aria-hidden="true"></i></button>            <button class="product-button wide">                <i class="fa fa-shopping-cart" aria-hidden="true"></i>                 <span class="add-to-cart">ADD TO CART</span>         </div>    </div>    <div class="product-title-and-price">        <div class="product-name product-item">  <span class="">blue tshirt</span> </div>        <div class="product-price product-item">  <span class="">$26</span> </div>    </div></div>';
    $('.featured').css('height', +$('.featured').css('height').replace('px','') +322 +'px');
    $('.featured-products').css('height', +$('.featured-products').css('height').replace('px','') +322 +'px');

    for ( i=0; i<4; i++) {
    $('.featured-products').append(html);
    }
};

// ===================
function ChangeCustomer(name) {
    $('.customer-name-name').text('- '+name+' -');
    $('.main-photo').css('background-color', $('.'+name).css('background-color'));
    $('customer-photo').css('border-color', '5px solid black');
    $('.'+name).css('border-color', '5px solid $Primary-color');
}

let CustomerPhoto = document.getElementsByClassName('customer-photo');
for(i=0 ; i<CustomerPhoto.length; i++) {
    let qname = CustomerPhoto[i].className.substring(CustomerPhoto[i].className.search(' ')+1);
    CustomerPhoto[i].addEventListener('click', function () { ChangeCustomer(qname) });
}

// ===================



// document.getElementsByClassName('wide').addEventListener('click', function () { CounterPlus() });
// ==============
// let currentSlide2 = 0;
// let currentTransform = 0;

// function animateWithTransform(direction) {
//     if (currentSlide2 === 0 && direction < 0 || currentSlide2 === 6 && direction > 0) {
//         return false;
//     }

//     currentSlide2 += direction;
//     currentTransform = -currentSlide2 * 100;

//     $('#carousel-with-transform .slides-container').css('transform', 'translateX(' + currentTransform + '%)');
// }

// $('#carousel-with-transform .carousel-button-left').click(function() { animateWithTransform(-1) });
// $('#carousel-with-transform .carousel-button-right').click(() => animateWithTransform(1));