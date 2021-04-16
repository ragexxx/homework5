var today = moment();
var options;
var save9 = $('.saveBtn9');
var save10 = $('.saveBtn10');
var save11 = $('.saveBtn11');
var save12 = $('.saveBtn12');
var save13 = $('.saveBtn13');
var save14 = $('.saveBtn14');
var save15 = $('.saveBtn15');
var save16 = $('.saveBtn16');
var save17 = $('.saveBtn17');
var date = new Date();
date = date.getHours();
alert(date);

$("#currentDay").text(today.format("ddd MMM Do, YYYY"));

getStorage();

function getStorage(){
    for( var i=9; i<=17; i++){
        options = localStorage.getItem("hour"+i);
        if(options != null){
            $('#description' + i).val(options);
        }
    }
}

save9.on('click', function () {
    localStorage.setItem( "hour9",$('textarea[name="description9"]').val() );
  });

save10.on('click', function () {
    localStorage.setItem( "hour10",$('textarea[name="description10"]').val() );
});

save11.on('click', function () {
    localStorage.setItem( "hour11",$('textarea[name="description11"]').val() );
});

save12.on('click', function () {
    localStorage.setItem( "hour12",$('textarea[name="description12"]').val() );
});

save13.on('click', function () {
    localStorage.setItem( "hour13",$('textarea[name="description13"]').val() );
});

save14.on('click', function () {
    localStorage.setItem( "hour14",$('textarea[name="description14"]').val() );
});

save15.on('click', function () {
    localStorage.setItem( "hour15",$('textarea[name="description15"]').val() );
});

save16.on('click', function () {
    localStorage.setItem( "hour16",$('textarea[name="description16"]').val() );
});

save17.on('click', function () {
    localStorage.setItem( "hour17",$('textarea[name="description17"]').val() );
  });
