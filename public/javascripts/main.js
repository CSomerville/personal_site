function constructLilSquares($el, reverse){
  var rects = ''
  var lastRow = [];
  for (var i = 0; i < 100; i++){
    lastRow.push(1);
  }
  for (var i = 0; i < 50; i++){
    var row = [];
    for (var j = 0; j < 100; j++){
      var rando = Math.floor(Math.random() * 100);
      if (rando !== 0 && lastRow[j] === 1 && lastRow[j-1] === 1 && lastRow[j+1] === 1) {
        if (!reverse) rects += '<rect x="' + j + '%" y="' + i * 2 + '%" width="1%"" height = "2%"/>';
        row.push(1);
      } else {
        if (lastRow[j] !== 1 && lastRow[j-1] !== 1 && lastRow[j+1] !== 1){
          if (reverse) rects += '<rect x="' + j + '%" y="' + i * 2 + '%" width="1%"" height = "2%"/>';
          row.push(0);
        } else {
          var rando = Math.floor(Math.random() * 3);
          if (rando === 0){
            if (!reverse) rects += '<rect x="' + j + '%" y="' + i * 2 + '%" width="1%"" height = "2%"/>';
            row.push(1);
          } else {
            if (reverse) rects += '<rect x="' + j + '%" y="' + i * 2 + '%" width="1%"" height = "2%"/>';
            row.push(0);
          }          
        }
      }
    }
    lastRow = row;
  }
  $el.html(rects)
}

function makePixellation(){

  for (var i = 0; i < 8; i++){
    constructLilSquares($($('.for-little-squares')[i]), (i % 2 !== 0)? true : false)
  }

}

function parralaxing(){
  $(window).on('scroll', function(){

    var ratio = window.scrollY / window.innerHeight;

    $('.back-panel').children().each(function(){
      $(this).css({'top': (37 + ratio * 30) + '%'});
    })

    $('.holds-content').first().css({'opacity': 1 - Math.abs(0.7 - ratio)})
    $($('.holds-content')[1]).css({'opacity': 1 - Math.abs(3.5 - ratio)})


    $('#hartwig').css({'top': (110 + ratio * 30) + '%'})
    $('#liberale').css({'top': (210 + ratio * 30) + '%'})  
    $('#iran').css({'top': (300 + ratio * 30) + '%'})  
  })

}


$(function(){
  makePixellation();
  parralaxing(); 
})


