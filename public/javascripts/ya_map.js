ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.73795555, 37.75781659],
            zoom: 13
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter([55.73795555, 37.75781659]), {
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
    mymap.addOverlay(placemark);
});









//
//ymaps.ready(init);
//
//function init () {
//    var myMap = new ymaps.Map("map", {
//            center: [55.76, 37.64],
//            zoom: 10
//        }, {
//            searchControlProvider: 'yandex#search'
//        }),
//
//    // Создаем геообъект с типом геометрии "Точка".
//        myGeoObject = new ymaps.GeoObject({
//            // Описание геометрии.
//            geometry: {
//                type: "Point",
//                coordinates: [55.8, 37.8]
//            },
//            // Свойства.
//            properties: {
//                // Контент метки.
//                iconContent: 'Я тащусь',
//                hintContent: 'Ну давай уже тащи',
//                iconImageHref: '/images/icons/address_metka.png'
//            }
//        }, {
//            // Опции.
//            // Иконка метки будет растягиваться под размер ее содержимого.
//            preset: 'islands#blackStretchyIcon',
//            // Метку можно перемещать.
//            draggable: true
//        });
//
//    myMap.geoObjects
//        .add(myGeoObject)
//        .add(new ymaps.Placemark([55.684758, 37.738521], {
//            balloonContent: 'цвет <strong>воды пляжа бонди</strong>'
//        }, {
//            preset: 'islands#icon',
//            iconColor: '#0095b6'
//        }))
//        .add(new ymaps.Placemark([55.833436, 37.715175], {
//            balloonContent: '<strong>серобуромалиновый</strong> цвет'
//            //iconImageHref: '/images/icons/address_metka.png'
//        }, {
//            preset: 'islands#dotIcon',
//            iconColor: '#735184',
//            iconImageHref: '/images/icons/address_metka.png'
//        }))
//        .add(new ymaps.Placemark([55.687086, 37.529789], {
//            balloonContent: 'цвет <strong>влюбленной жабы</strong>'
//        }, {
//            preset: 'islands#circleIcon',
//            iconColor: '#3caa3c'
//        }))
//        .add(new ymaps.Placemark([55.782392, 37.614924], {
//            balloonContent: 'цвет <strong>детской неожиданности</strong>'
//        }, {
//            preset: 'islands#circleDotIcon',
//            iconColor: 'yellow'
//        }))
//        .add(new ymaps.Placemark([55.642063, 37.656123], {
//            balloonContent: 'цвет <strong>бисмарк-фуриозо</strong>'
//        }, {
//            preset: 'islands#icon',
//            iconColor: '#a5260a'
//        }))
//        .add(new ymaps.Placemark([55.826479, 37.487208], {
//            balloonContent: 'цвет <strong>фэйсбука</strong>'
//        }, {
//            preset: 'islands#dotIcon',
//            iconColor: '#3b5998'
//        }))
//        .add(new ymaps.Placemark([55.694843, 37.435023], {
//            balloonContent: 'цвет <strong>вконтакте</strong>'
//        }, {
//            preset: 'islands#circleIcon',
//            iconColor: '#4d7198'
//        }))
//        .add(new ymaps.Placemark([55.790139, 37.814052], {
//            balloonContent: 'цвет <strong>твиттера</strong>'
//        }, {
//            preset: 'islands#circleDotIcon',
//            iconColor: '#1faee9'
//        }));
//}