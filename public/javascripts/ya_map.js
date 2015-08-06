ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.74182928, 37.73910550],
            zoom: 13
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '/images/icons/address_metka.png',
            // Размеры метки.
            iconImageSize: [120, 80],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0]
        });

    myMap.geoObjects.add(myPlacemark);
});