// provides functionality to the nav bar.

function setScroll(navButton, targetDiv){
  $(navButton).on('click', function(){
    $('html, body').animate({
      scrollTop: $(targetDiv).offset().top - window.innerHeight * .3
    }, 400)
  })
}

function navBar() {

  // sets event listeners on each nav button in turn.

  setScroll('#about', '.magenta.belt-like-container');
  setScroll('#projects', '.green.belt-like-container');
  setScroll('#skills', '.gold.belt-like-container');
  setScroll('#contact', '.bottom-container');
}

// makes the pixel nightmare by building up a series of svg rectangles

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
  var classes = $el.attr('class');
  $el.replaceWith('<svg class="' + classes + '">' + rects + '</svg>')
}

// calls pixel grid function on each of the svg canvases.

function makePixellation(){

  for (var i = 0; i < 8; i++){
    constructLilSquares($($('.for-little-squares')[i]), (i % 2 !== 0)? true : false)
  }

}

function setBackgroundDivs() {
    var topForHartwig = $(".magenta.belt-like-container").position().top + $(".magenta.belt-like-container").outerHeight(true)
    var topForLiberale = $(".green.belt-like-container").position().top + $(".green.belt-like-container").outerHeight(true)
    var topForIran = $(".gold.belt-like-container").position().top + $(".gold.belt-like-container").outerHeight(true)

    $('#hartwig').css({'top': topForHartwig + 'px'});
    $('#liberale').css({'top': topForLiberale + 'px'});
    $('#iran').css({'top': topForIran + 'px'});  
}

function parralaxing(){
  $(window).on('scroll', function(){

    var ratio = window.scrollY / window.innerHeight;

    $('.back-panel').children().each(function(){
      $(this).css({'top': (37 + ratio * 30) + '%'});
    })

    $('.holds-content').first().css({'opacity': 1 - Math.abs(0.7 - ratio)})
    $($('.holds-content')[1]).find('h1').css({'opacity': 1 - Math.abs(2.16 - ratio)})
    $($('.holds-content')[2]).css({'opacity': 1 - (2 * Math.abs(3.5 - ratio))})

    $('#hartwig').find('.holds-image').css({'top': (ratio * 30) - 65 + '%'})
    $('#liberale').find('.holds-image').css({'top': (ratio * 30) - 85 + '%'})  
    $('#iran').find('.holds-image').css({'top': (ratio * 30) - 140 + '%'})  
  })

}


$(function(){
  if (document.documentElement.clientWidth > 700){
    $(window).on('resize', function(){
      setBackgroundDivs();
    })  
    navBar();
    makePixellation();
    setBackgroundDivs();
    parralaxing(); 
  }
})


