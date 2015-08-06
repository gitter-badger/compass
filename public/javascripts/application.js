// Put your application scripts here


$(".tab").click(function() {
    $(".tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");


var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);



function init () {

    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [55.76, 37.64], // Москва
        zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
    });

// Создает метку, значок которой не скрывается при открытии балуна
    var placemark = new YMaps.Placemark(new YMaps.GeoPoint(37.609218,55.753559), {hideIcon: false});

// Добавляет метку на карту
    map.addOverlay(placemark);

}