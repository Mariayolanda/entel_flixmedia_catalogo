var descrip_samsung =[
{
    "product_name": "Galaxy A10s",
    "MPN": "SM-A107MZKAPEO",
    "EAN": "8806090025648",
    "id_prod": "31970"
},
{
    "product_name": "Galaxy A20s",
    "MPN": "SM-A207MZBAPEO",
    "EAN": "8806090051678",
    "id_prod": "50670"
},
{
    "product_name": "Galaxy A30s",
    "MPN": "SM-A307GZKBPEO",
    "EAN": "8806090101120",
    "id_prod": "50462"
},
{
    "product_name": "Galaxy A30s",
    "MPN": "SM-A307GZKBPEO",
    "EAN": "8806090101120",
    "id_prod": "30019"
},
{
    "product_name": "Galaxy S10+",
    "MPN": "SM-G975FZWLPEO",
    "EAN": "8801643673611",
    "id_prod": "50302"
},
{
    "product_name": "Galaxy S10+",
    "MPN": "SM-G975FZWLPEO",
    "EAN": "8801643673611",
    "id_prod": "32558"
},
{
    "product_name": "Galaxy A30",
    "MPN": "SM-A305GZBBPEO",
    "EAN": "8801643846015",
    "id_prod": "32609"
},
{
    "product_name": "Galaxy A10",
    "MPN": "SM-A105MZKMPEO",
    "EAN": "8801643865214",
    "id_prod": "32627"
},
{
    "product_name": "Galaxy A20",
    "MPN": "SM-A205GZKLPEO",
    "EAN": "8801643853051",
    "id_prod": "50308"
},
{
    "product_name": "Galaxy Note10",
    "MPN": "SM-N970FZSLPEO",
    "EAN": "8806090058394",
    "id_prod": "4243"
},
{
    "product_name": "Galaxy Note10+",
    "MPN": "SM-N975FZSLPEO",
    "EAN": "8806090056697",
    "id_prod": "50564"
},
{
    "product_name": "Galaxy Note10+",
    "MPN": "SM-N975FZSLPEO",
    "EAN": "8806090056697",
    "id_prod": "31968"
},
{
    "product_name": "Galaxy S10",
    "MPN": "SM-G973FZWLPEO",
    "EAN": "8801643667948",
    "id_prod": "50521"
},
{
    "product_name": "Galaxy S10",
    "MPN": "SM-G973FZWLPEO",
    "EAN": "8801643667948",
    "id_prod": "32548"
},
{
    "product_name": "Galaxy S8+",
    "MPN": "SM-G955FZSLSAM",
    "EAN": "8806088722993",
    "id_prod": "31028"
},
{
    "product_name": "Gradation Cover (Galaxy A7 2018)",
    "MPN": "EF-AA750CLEGWW",
    "EAN": "8801643590116",
    "id_prod": "50488"
},
{
    "product_name": "Gradation Cover (Galaxy A7 2018)",
    "MPN": "EF-AA750CLEGWW",
    "EAN": "8801643590116",
    "id_prod": "30060"
},
{
    "product_name": "Galaxy J6+",
    "MPN": "SM-J610GZALPEO",
    "EAN": "8801643508302",
    "id_prod": "50021"
},
{
    "product_name": "Galaxy A50",
    "MPN": "SM-A505GZKBPEO",
    "EAN": "8801643847913",
    "id_prod": "32616"
},
{
    "product_name": "Galaxy A30s",
    "MPN": "SM-A307GZKBPEO",
    "EAN": "8806090101120",
    "id_prod": "30015"
},
{
    "product_name": "Galaxy A30s",
    "MPN": "SM-A307GZKBPEO",
    "EAN": "8806090101120",
    "id_prod": "50461"
},
{
    "product_name": "Galaxy A50",
    "MPN": "SM-A505GZKBPEO",
    "EAN": "8801643847913",
    "id_prod": "50496"
},
{
    "product_name": "Galaxy A50",
    "MPN": "SM-A505GZKBPEO",
    "EAN": "8801643847913",
    "id_prod": "50482"
},
{
    "product_name": "Galaxy A70",
    "MPN": "SM-A705MZKLPEO",
    "EAN": "8801643867287",
    "id_prod": "50503"
},
{
    "product_name": "Galaxy A70",
    "MPN": "SM-A705MZKLPEO",
    "EAN": "8801643867287",
    "id_prod": "50650"
},
{
    "product_name": "Galaxy A20s",
    "MPN": "SM-A207MZBAPEO",
    "EAN": "8806090051678",
    "id_prod": "50663"
},
{
    "product_name": "Galaxy S10+",
    "MPN": "SM-G975FZWLPEO",
    "EAN": "8801643673611",
    "id_prod": "50304"
},
{
    "product_name": "Galaxy S10+",
    "MPN": "SM-G975FZWLPEO",
    "EAN": "8801643673611",
    "id_prod": "32554"
},
{
    "product_name": "Galaxy J6+",
    "MPN": "SM-J610GZALPEO",
    "EAN": "8801643508302",
    "id_prod": "32006"
},
{
    "product_name": "Galaxy J7 Pro",
    "MPN": "SM-J730GZKLPET",
    "EAN": "8806088837482",
    "id_prod": "31017"
},
{
    "product_name": "Galaxy J6",
    "MPN": "SM-J600GZDMPET",
    "EAN": "8801643294748",
    "id_prod": "31934"
},
{
    "product_name": "Galaxy J4+",
    "MPN": "SM-J415GZKJPEO",
    "EAN": "8801643507824",
    "id_prod": "2582"
}
];
var brand_product = $('.brandName').attr('class').split(' ')[1];
var flixinserted = 0;
if(brand_product === 'Samsung') {
    $.each( descrip_samsung, function( key, value ) {
        if(skuJson_0.productId == value.id_prod && flixinserted == 0) {
            var product_mpn = value.MPN;
            var product_ean = value.EAN;
            var product_brand = brand_product;
            var distributor = "16203";
            var language = "pe"
            var headID = document.getElementsByTagName("head")[0];
            var flixScript = document.createElement('script'); flixScript.type = 'text/javascript';
            flixScript.async = true;
            flixScript.src = '//media.flixfacts.com/js/loader.js';
            flixScript.setAttribute('data-flix-distributor', distributor);
            flixScript.setAttribute('data-flix-language', language);
            flixScript.setAttribute('data-flix-brand', product_brand);
            flixScript.setAttribute('data-flix-ean', product_ean);
            flixScript.setAttribute('data-flix-mpn', product_mpn);
            flixScript.setAttribute('data-flix-inpage', 'flix-inpage');
            
            flixScript.onload = function() {
                $('.inpage-section').show();
                $('#flix-inpage').appendTo('.inpage-section-description');
            };

            headID.appendChild(flixScript);
            flixinserted = 1;
        }
    });
}