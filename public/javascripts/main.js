function drawSquare(onOrOff, color, row, reverse){

  if (onOrOff === 'on'){
    row.push((reverse === true)? 0 : 1);
    return $('<div>').attr('class', 'little-square').css({'background-color': color})
  } else if (onOrOff === 'off'){
    row.push((reverse === true)? 1 : 0);
    return $('<div>').css({'opacity': '0'}).attr('class', 'little-square')
  }

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