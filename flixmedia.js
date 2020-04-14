// flixmedia
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

// duplicate content
var duplicate_content =[
    {
        pathname: '/personas/celulares/kits/samsung',
        search: '',
        href: 'https://catalogo.entel.pe/samsung'
    },
    {
        pathname: '/personas/celulares/kits/entel',
        search: '',
        href: 'https://catalogo.entel.pe/'
    },
    {
        pathname: '/personas/celulares/kits/motorola',
        search: '',
        href: 'https://catalogo.entel.pe/motorola'
    },
    {
        pathname: '/personas/celulares/alcatel/Si/Kit/Prepago',
        search: '',
        href: 'https://catalogo.entel.pe/alcatel'
    },
    {
        pathname: '/personas/celulares/alcatel/Si/Prepago/Personas',
        search: '',
        href: 'https://catalogo.entel.pe/alcatel'
    },
    {
        pathname: '/personas/celulares/alcatel/Prepago%20Migra/--',
        search: '',
        href: 'https://catalogo.entel.pe/alcatel'
    },
    {
        pathname: '/personas/celulares/alcatel/Si/Prepago/No',
        search: '',
        href: 'https://catalogo.entel.pe/alcatel'
    },
    {
        pathname: '/personas/celulares/smarthphones/apple',
        search: '',
        href: 'https://catalogo.entel.pe/apple'
    },
    {
        pathname: '/personas/celulares/apple/Postpago%20Migra',
        search: '',
        href: 'https://catalogo.entel.pe/apple'
    },
    {
        pathname: '/personas/celulares/apple/Personas/Si/No',
        search: '',
        href: 'https://catalogo.entel.pe/apple'
    },
    {
        pathname: '/personas/celulares/apple/Prepago/Kit/--',
        search: '',
        href: 'https://catalogo.entel.pe/apple'
    },
    {
        pathname: '/personas/celulares/apple/Si/En%20tienda/No',
        search: '',
        href: 'https://catalogo.entel.pe/apple'
    },
    {
        pathname: '/personas/celulares/apple/No/Personas/Si/Libres',
        search: '',
        href: 'https://catalogo.entel.pe/apple'
    },
    {
        pathname: '/personas/celulares/apple/Personas/Kit/Postpago%20Migra',
        search: '',
        href: 'https://catalogo.entel.pe/apple'
    },
    {
        pathname: '/personas/celulares/apple/Si/Kit/Si/No',
        search: '',
        href: 'https://catalogo.entel.pe/apple'
    },
    {
        pathname: '/personas/celulares/apple/Libres/Personas/No/Libre',
        search: '',
        href: 'https://catalogo.entel.pe/apple'
    },
    {
        pathname: '/personas/celulares/apple/Postpago%20Migra/--/Kit',
        search: '',
        href: 'https://catalogo.entel.pe/apple'
    },
    {
        pathname: '/personas/celulares/apple/--/Kit/Si/--',
        search: '',
        href: 'https://catalogo.entel.pe/apple'
    },
    {
        pathname: '/personas/celulares/apple/Postpago%20Migra/Si/Si/Kit',
        search: '',
        href: 'https://catalogo.entel.pe/apple'
    },
    {
        pathname: '/personas/celulares/huawei',
        search: '',
        href: 'https://catalogo.entel.pe/huawei'
    },
    {
        pathname: '/personas/celulares/huawei/huawei',
        search: '',
        href: 'https://catalogo.entel.pe/huawei'
    },
    {
        pathname: '/personas/celulares/huawei/xiaomi',
        search: '',
        href: 'https://catalogo.entel.pe/huawei'
    },
    {
        pathname: '/personas/celulares/smarthphones/huawei',
        search: '',
        href: 'https://catalogo.entel.pe/huawei'
    },
    {
        pathname: '/personas/celulares/smarthphones/lg/huawei',
        search: '',
        href: 'https://catalogo.entel.pe/huawei'
    },
    {
        pathname: '/personas/celulares/huawei/Libres/Si',
        search: '',
        href: 'https://catalogo.entel.pe/huawei'
    },
    {
        pathname: '/personas/celulares/huawei/Si/No',
        search: '',
        href: 'https://catalogo.entel.pe/huawei'
    },
    {
        pathname: '/personas/celulares/huawei/Postpago%20Migra',
        search: '',
        href: 'https://catalogo.entel.pe/huawei'
    },
    {
        pathname: '/personas/celulares/huawei/No/Postpago%20Migra',
        search: '',
        href: 'https://catalogo.entel.pe/huawei'
    },
    {
        pathname: '/personas/celulares/huawei/Libre/Personas/Kit/No',
        search: '',
        href: 'https://catalogo.entel.pe/huawei'
    },
    {
        pathname: '/personas/celulares/huawei/Libres/Personas/Si/Si',
        search: '',
        href: 'https://catalogo.entel.pe/huawei'
    },
    {
        pathname: '/personas/celulares/huawei/Libres/No/Si/Personas',
        search: '',
        href: 'https://catalogo.entel.pe/huawei'
    },
    {
        pathname: '/personas/celulares/huawei/Si/En%20tienda/---',
        search: '',
        href: 'https://catalogo.entel.pe/huawei'
    },
    {
        pathname: '/personas/celulares/huawei/Si/Si/Kit/---',
        search: '',
        href: 'https://catalogo.entel.pe/huawei'
    },
    {
        pathname: '/personas/celulares/huawei/Si/Kit/En%20tienda/Prepago',
        search: '',
        href: 'https://catalogo.entel.pe/huawei'
    },
    {
        pathname: '/personas/celulares/lenovo/Si/Prepago',
        search: '',
        href: 'https://catalogo.entel.pe/lenovo'
    },
    {
        pathname: '/personas/celulares/lenovo/Producto/Personas',
        search: '',
        href: 'https://catalogo.entel.pe/lenovo'
    },
    {
        pathname: '/personas/celulares/lenovo/Prepago%20Migra/Personas',
        search: '',
        href: 'https://catalogo.entel.pe/lenovo'
    },
    {
        pathname: '/personas/celulares/lenovo/Prepago%20Migra/En%20tienda',
        search: '',
        href: 'https://catalogo.entel.pe/lenovo'
    },
    {
        pathname: '/personas/celulares/lg/own',
        search: '',
        href: 'https://catalogo.entel.pe/lg'
    },
    {
        pathname: '/personas/celulares/lg/alcatel',
        search: '',
        href: 'https://catalogo.entel.pe/lg'
    },
    {
        pathname: '/personas/celulares/smarthphones/lg',
        search: '',
        href: 'https://catalogo.entel.pe/lg'
    },
    {
        pathname: '/personas/celulares/smarthphones/lg/xiaomi',
        search: '',
        href: 'https://catalogo.entel.pe/lg'
    },
    {
        pathname: '/personas/celulares/smarthphones/lg/alcatel',
        search: '',
        href: 'https://catalogo.entel.pe/lg'
    },
    {
        pathname: '/personas/celulares/lg/No/En%20tienda',
        search: '',
        href: 'https://catalogo.entel.pe/lg'
    },
    {
        pathname: '/personas/celulares/lg/Prepago%20Línea%20Nueva',
        search: '',
        href: 'https://catalogo.entel.pe/lg'
    },
    {
        pathname: '/personas/celulares/lg/Personas/Libres/Si/Producto',
        search: '',
        href: 'https://catalogo.entel.pe/lg'
    },
    {
        pathname: '/personas/celulares/lg/Si/--/Prepago%20Migra',
        search: '',
        href: 'https://catalogo.entel.pe/lg'
    },
    {
        pathname: '/personas/celulares/lg/--/Postpago%20Migra/Si',
        search: '',
        href: 'https://catalogo.entel.pe/lg'
    },
    {
        pathname: '/personas/celulares/motorola',
        search: '',
        href: 'https://catalogo.entel.pe/motorola'
    },
    {
        pathname: '/personas/celulares/smarthphones/motorola',
        search: '',
        href: 'https://catalogo.entel.pe/motorola'
    },
    {
        pathname: '/personas/celulares/smarthphones/lg/motorola',
        search: '',
        href: 'https://catalogo.entel.pe/motorola'
    },
    {
        pathname: '/personas/celulares/motorola/--/Prepago',
        search: '',
        href: 'https://catalogo.entel.pe/motorola'
    },
    {
        pathname: '/personas/celulares/motorola/Prepago%20Migra/Kit',
        search: '',
        href: 'https://catalogo.entel.pe/motorola'
    },
    {
        pathname: '/personas/celulares/motorola/Personas/Si/Prepago/No',
        search: '',
        href: 'https://catalogo.entel.pe/motorola'
    },
    {
        pathname: '/personas/celulares/motorola/--/Si/Prepago/Kit',
        search: '',
        href: 'https://catalogo.entel.pe/motorola'
    },
    {
        pathname: '/personas/celulares/motorola/8%20MP%20o%20más/Personas',
        search: '',
        href: 'https://catalogo.entel.pe/motorola'
    },
    {
        pathname: '/personas/celulares/motorola/Prepago/Prepago%20Línea%20Nueva/Personas',
        search: '',
        href: 'https://catalogo.entel.pe/motorola'
    },
    {
        pathname: '/personas/celulares/nokia',
        search: '',
        href: 'https://catalogo.entel.pe/nokia'
    },
    {
        pathname: '/personas/celulares/nokia/own',
        search: '',
        href: 'https://catalogo.entel.pe/nokia'
    },
    {
        pathname: '/personas/celulares/nokia/nokia',
        search: '',
        href: 'https://catalogo.entel.pe/nokia'
    },
    {
        pathname: '/personas/celulares/nokia/motorola',
        search: '',
        href: 'https://catalogo.entel.pe/nokia'
    },
    {
        pathname: '/personas/celulares/smarthphones/nokia',
        search: '',
        href: 'https://catalogo.entel.pe/nokia'
    },
    {
        pathname: '/personas/celulares/nokia/Si',
        search: '',
        href: 'https://catalogo.entel.pe/nokia'
    },
    {
        pathname: '/personas/celulares/nokia/No/--',
        search: '',
        href: 'https://catalogo.entel.pe/nokia'
    },
    {
        pathname: '/personas/celulares/nokia/Si/Prepago%20Migra',
        search: '',
        href: 'https://catalogo.entel.pe/nokia'
    },
    {
        pathname: '/personas/celulares/nokia/Si/Kit/Libre',
        search: '',
        href: 'https://catalogo.entel.pe/nokia'
    },
    {
        pathname: '/personas/celulares/nokia/Libre/Si/Personas',
        search: '',
        href: 'https://catalogo.entel.pe/nokia'
    },
    {
        pathname: '/personas/celulares/nokia/Prepago%20Línea%20Nueva',
        search: '',
        href: 'https://catalogo.entel.pe/nokia'
    },
    {
        pathname: '/personas/celulares/nokia/En%20tienda/Prepago%20Migra',
        search: '',
        href: 'https://catalogo.entel.pe/nokia'
    },
    {
        pathname: '/personas/celulares/nokia/Kit/Prepago%20Migra/Si',
        search: '',
        href: 'https://catalogo.entel.pe/nokia'
    },
    {
        pathname: '/personas/celulares/nokia/Personas/No/--/Kit',
        search: '',
        href: 'https://catalogo.entel.pe/nokia'
    },
    {
        pathname: '/personas/celulares/kits/own',
        search: '',
        href: 'https://catalogo.entel.pe/own'
    },
    {
        pathname: '/personas/celulares/smarthphones/own',
        search: '',
        href: 'https://catalogo.entel.pe/own'
    },
    {
        pathname: '/personas/celulares/own/Personas/Prepago',
        search: '',
        href: 'https://catalogo.entel.pe/own'
    },
    {
        pathname: '/personas/celulares/own/Prepago/No',
        search: '',
        href: 'https://catalogo.entel.pe/own'
    },
    {
        pathname: '/personas/celulares/own/Si/--',
        search: '',
        href: 'https://catalogo.entel.pe/own'
    },
    {
        pathname: '/personas/celulares/own/Prepago%20Línea%20Nueva',
        search: '',
        href: 'https://catalogo.entel.pe/own'
    },
    {
        pathname: '/personas/celulares/own/No/Postpago%20Línea%20Nueva',
        search: '',
        href: 'https://catalogo.entel.pe/own'
    },
    {
        pathname: '/personas/celulares/own/Prepago%20Línea%20Nueva/Producto/Si',
        search: '',
        href: 'https://catalogo.entel.pe/own'
    },
    {
        pathname: '/personas/celulares/samsung',
        search: '',
        href: 'https://catalogo.entel.pe/samsung'
    },
    {
        pathname: '/personas/celulares/samsung/huawei',
        search: '',
        href: 'https://catalogo.entel.pe/samsung'
    },
    {
        pathname: '/personas/celulares/samsung/motorola',
        search: '',
        href: 'https://catalogo.entel.pe/samsung'
    },
    {
        pathname: '/personas/celulares/samsung/samsung',
        search: '',
        href: 'https://catalogo.entel.pe/samsung'
    },
    {
        pathname: '/personas/celulares/samsung/own',
        search: '',
        href: 'https://catalogo.entel.pe/samsung'
    },
    {
        pathname: '/personas/celulares/smarthphones/samsung',
        search: '',
        href: 'https://catalogo.entel.pe/samsung'
    },
    {
        pathname: '/personas/celulares/samsung/Postpago%20Renovación',
        search: '',
        href: 'https://catalogo.entel.pe/samsung'
    },
    {
        pathname: '/personas/celulares/samsung/Libres/Kit/161',
        search: '',
        href: 'https://catalogo.entel.pe/samsung'
    },
    {
        pathname: '/personas/celulares/samsung/Personas/Kit/Postpago%20Migra',
        search: '',
        href: 'https://catalogo.entel.pe/samsung'
    },
    {
        pathname: '/personas/celulares/samsung/Libre/Kit/Libres/Personas',
        search: '',
        href: 'https://catalogo.entel.pe/samsung'
    },
    {
        pathname: '/personas/celulares/samsung/Prepago%20Línea%20Nueva/Kit',
        search: '',
        href: 'https://catalogo.entel.pe/samsung'
    },
    {
        pathname: '/personas/celulares/samsung/--/Si/Prepago/Personas',
        search: '',
        href: 'https://catalogo.entel.pe/samsung'
    },
    {
        pathname: '/personas/celulares/samsung/Si/--/Prepago%20Migra',
        search: '',
        href: 'https://catalogo.entel.pe/samsung'
    },
    {
        pathname: '/personas/celulares/xiaomi',
        search: '',
        href: 'https://catalogo.entel.pe/xiaomi'
    },
    {
        pathname: '/personas/celulares/kits/xiaomi',
        search: '',
        href: 'https://catalogo.entel.pe/xiaomi'
    },
    {
        pathname: '/personas/celulares/smarthphones/xiaomi',
        search: '',
        href: 'https://catalogo.entel.pe/xiaomi'
    },
    {
        pathname: '/Sistema/404',
        search: '?ProductLinkNotFound=galaxy-a50-negro-chip-85-w',
        href: 'https://catalogo.entel.pe/samsung-galaxy-a50-negro-chip-85-w/p?modalidad=postpago-renovacion&plan=chip-85.9&oferta=especial&cuota=18'
    },
    {
        pathname: '/moto-g7-negro-chip-85-w/p',
        search: '?modalidad=postpago-renovacion&plan=chip-85.9&oferta=regular&cuota=18',
        href: 'https://catalogo.entel.pe/motorola-moto-g7-negro-chip-85-w/p?modalidad=postpago-renovacion&plan=chip-85.9&oferta=regular&cuota=18'
    },
    {
        pathname: '/moto-g7-negro-chip-85-w/p',
        search: '?modalidad=postpago-migra&plan=chip-85.9&oferta=especial&cuota=12',
        href: 'https://catalogo.entel.pe/motorola-moto-g7-negro-chip-85-w/p?modalidad=postpago-migra&plan=chip-85.9&oferta=especial&cuota=12'
    },
    {
        pathname: '/redmi-note-7-neptune-blue-chip-65-w/p',
        search: '?modalidad=postpago-migra&plan=chip-65.9&oferta=regular&cuota=18',
        href: 'https://catalogo.entel.pe/xiaomi-redmi-note-7-neptune-blue-chip-65-w/p?modalidad=postpago-migra&plan=chip-65.9&oferta=regular&cuota=18'
    },
    {
        pathname: '/p30-lite-negro-obsidiana-chip-65-w/p',
        search: '?modalidad=postpago-migra&plan=chip-65.9&oferta=especial&cuota=18',
        href: 'https://catalogo.entel.pe/huawei-p30-lite-negro-obsidiana-chip-65-w/p?modalidad=postpago-migra&plan=chip-65.9&oferta=especial&cuota=18'
    },
    {
        pathname: '/y9s-negro-chip-85-w/p',
        search: '?modalidad=libres&plan=Libre&oferta=regular&cuota=0',
        href: 'https://catalogo.entel.pe/huawei-y9s-negro-chip-85-w/p?modalidad=libres&plan=Libre&oferta=regular&cuota=0'
    },
    {
        pathname: '/y9s-negro-chip-85-w/p',
        search: '?modalidad=postpago-migra&plan=chip-85.9&oferta=regular&cuota=0',
        href: 'https://catalogo.entel.pe/huawei-y9s-negro-chip-85-w/p?modalidad=postpago-migra&plan=chip-85.9&oferta=regular&cuota=0'
    },
    {
        pathname: '/redmi-note-7-neptune-blue-chip-65-w/p',
        search: '?modalidad=postpago-migra&plan=chip-65.9&oferta=especial&cuota=12',
        href: 'https://catalogo.entel.pe/xiaomi-redmi-note-7-neptune-blue-chip-65-w/p?modalidad=postpago-migra&plan=chip-65.9&oferta=especial&cuota=12'
    },
    {
        pathname: '/p-smart-negro-chip-65-w/p',
        search: '?modalidad=libres&plan=Libre&oferta=regular&cuota=0',
        href: 'https://catalogo.entel.pe/huawei-p-smart-negro-chip-65-w/p?modalidad=libres&plan=Libre&oferta=regular&cuota=0'
    }
];

duplicate_content.forEach(function(item) {
    if (item.search) {
        if ((item.pathname === window.location.pathname) && (item.search === window.location.search)) {
            window.location.href = item.href;
        }
    } else {
        if (item.pathname === window.location.pathname) {
            window.location.href = item.href;
        }
    }
});