//$('#example1').Tabledit({
//    url: 'update',
//    columns: {
//        identifier: [0, 'id'],
//        editable: [[1, 'title'], [2, 'price']]
//    }
//});


$('#example1').Tabledit({


    url: 'update',

    columns: {
        identifier: [0, 'id'],
        editable: [[1, 'username'], [2, 'email'], ]
    },
    onDraw: function() {
        console.log('onDraw()');
    },
    beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},

    onSuccess: function(data, textStatus, jqXHR) {
        console.log('onSuccess(data, textStatus, jqXHR)');
        console.log(data);
        console.log(textStatus);
        console.log(jqXHR);
    },
    onFail: function(jqXHR, textStatus, errorThrown) {
        console.log('onFail(jqXHR, textStatus, errorThrown)');
        console.log(jqXHR);
        console.log(textStatus);
        console.log(errorThrown);
    },
    onAlways: function() {
        console.log('onAlways()');
    },
    onAjax: function(action, serialize) {

        console.log('onAjax(action, serialize)');
        console.log(action);
        console.log(serialize);
    }
});