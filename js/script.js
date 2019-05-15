const API_PRODUCTS = 'http://www.mocky.io/v2/5cd809fc300000902574cd14';
const PRICE_START = 0;
const PRICE_END = 1000000;

$( document ).ready(function() {
    let PRODUCTS = [];
    let PRODUCT_TEMPLATE = '';
    let PAGE = 1;
    const PER_PAGE = 6;

    let priceStart = PRICE_START;
    let priceEnd = PRICE_END;

    $.ajax({
        method: 'GET',
        url: API_PRODUCTS,
        dataType: 'json',
        success: function(result) {
            PRODUCTS = result;

            getProductTemplate().then(function() {
                PRODUCTS.slice(0, 6).forEach(function(product, index) {
                    const preparedProduct = prepareProduct(product);

                    $('.productsBlock').append(preparedProduct);

                    if (index < 4) {
                        $('.sellsContainer__productContainerInSall').append(preparedProduct);
                    }
                });
            });
        }
    });

    function getProductTemplate() {
        return $.ajax({
            method: 'GET',
            url: './parts/productItemSellContainer.html',
            dataType: 'text',
            success: function(result) {
                PRODUCT_TEMPLATE = result;
            }
        });
    }

    function prepareProduct(product) {
        return PRODUCT_TEMPLATE
            .replace('[IMAGE]', product.image)
            .replace('[NAME]', product.name)
            .replace('[COLOR]', product.color)
            .replace('[PRICE]', product.price);
    }

    $('.next').on('click', function() {
        showProducts();
    });

    function showProducts() {
        $('button', '.next').prop("disabled",true);
        $('.noProductsInfo').removeClass('active');
        const start = PER_PAGE * PAGE;
        const end = start + 6;
        PAGE = PAGE + 1;

        const myProducts = PRODUCTS.filter(item => item.price >= priceStart && item.price <= priceEnd).slice(start, end);
        
        myProducts.forEach(function(product) {
            const preparedProduct = prepareProduct(product);

            $('.productsBlock').append(preparedProduct);
        });

        if (PER_PAGE === myProducts.length) {
            $('button', '.next').prop("disabled", false);
        }

        if (myProducts.length === 0) {
            $('.noProductsInfo').addClass('active');
        }
    }

    $('.priceStart').on('input', function() {
        $('.productsBlock').empty();
        priceStart =  $(this).val() || PRICE_START;
        PAGE = 0;
        showProducts();
    });

    $('.priceEnd').on('input', function() {
        $('.productsBlock').empty();
        priceEnd = $(this).val() || PRICE_END;
        PAGE = 0;
        showProducts();
    });

    $('.navTopBar').on('click', function() {
        $('body').toggleClass('mobile-menu-opened');
        $(this).toggleClass('active');
    });
});