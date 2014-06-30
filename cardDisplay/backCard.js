/**********************************************
 * Fix: Opponent Card on the field Known To   *
 * Appear on Back Face instead of Front Face, *
 * this script fix it                         *
 **********************************************/

$('#content').click(function() {$("[id^=c-]").each(function(){
        if ($(this).attr("data-location") === "opponent-SecondRow" || $(this).attr("data-location") === "opponent-FirstRow")
  {
   $(this).find("img")[0].src = $(this).attr("src");
  }
});})