function drawSquare(onOrOff, color, row, reverse){

  var $littleSquare = $('<div>').attr('class', 'little-square ' + color)

  if (onOrOff === 'on'){
    row.push((reverse === true)? 0 : 1);
  } else if (onOrOff === 'off'){

    row.push((reverse === true)? 1 : 0);
    $littleSquare.css({'opacity': '0'});

  }

  return $littleSquare;

}

function drawGrid($el, color, reverse){
  var lastRow = [];
  for (var i = 0; i < 100; i++){
    lastRow.push(1);
  }
  for (var j = 0; j < 50; j++){
    var row = [];
    for (var i = 0; i < 100; i++){
      var rando = Math.floor(Math.random() * 100);
      if (rando !== 0 && lastRow[i] === 1 && lastRow[i-1] === 1 && lastRow[i+1] === 1){
        var $div = drawSquare((reverse === true)? 'off' : 'on', color, row, reverse);
      } else {
        if (lastRow[i] !== 1 && lastRow[i-1] !== 1 && lastRow[i+1] !== 1){
          var $div = drawSquare((reverse === true)? 'on' : 'off', color, row, reverse);
        } else {
          var rando = Math.floor(Math.random() * 3);
          if (rando === 0){
            var $div = drawSquare((reverse === true)? 'off' : 'on', color, row, reverse)
          } else {
            var $div = drawSquare((reverse === true)? 'on' : 'off', color, row, reverse)
          }
        }
      }
      $el.append($div)
    }
    lastRow = row; 
  }
  return $el;
}

function makeDivFoam(){

  drawGrid($('.holds-lil-squares').first(), 'green')
  drawGrid($($('.holds-lil-squares')[1]), 'magenta', true);

  window.setTimeout(function(){
    drawGrid($($('.holds-lil-squares')[2]), 'magenta');
    drawGrid($($('.holds-lil-squares')[3]), 'green', true);
  }, 1000)

  window.setTimeout(function(){
    drawGrid($($('.holds-lil-squares')[4]), 'green');
    drawGrid($($('.holds-lil-squares')[5]), 'gold', true);  
  }, 2000)

  window.setTimeout(function(){
    drawGrid($($('.holds-lil-squares')[6]), 'gold');
    drawGrid($($('.holds-lil-squares')[7]), 'green', true);        
  }, 3000)
}

function parralaxing(){
  $(window).on('scroll', function(){

    var ratio = window.scrollY / window.innerHeight;

    $('.back-panel').children().each(function(){
      $(this).css({'top': (37 + ratio * 30) + '%'});
    })

    $('#hartwig').css({'top': (110 + ratio * 30) + '%'})
    $('#liberale').css({'top': (210 + ratio * 30) + '%'})  
    $('#iran').css({'top': (300 + ratio * 30) + '%'})  
  })

}


$(function(){

  makeDivFoam();

  parralaxing(); 

})







