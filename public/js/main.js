
$(document).foundation();
$('#entrance').click(function() {
  scrollToAnchor('begins');
});
function scrollToAnchor(aid){
  var aTag = $("a[name='"+ aid +"']");
  $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}
