Neatline.on('start', function() {
 
  var map = Neatline.request('MAP:getMap');
 
  $('.testtags').click(function() {
    Neatline.execute('MAP:load', { tags: ['test'] });
  });
 
  $('.btn.out').click(function() {
    map.zoomOut();
  });
 
});