Compilation of Animations and Fixes

How to use:

javascript:$.getScript('https://raw.githubusercontent.com/TouhouRSO/JS/master/fullPatch.js');void(0);

-----Dulst Doesnt Support Unlocal Script Usage So the above won't work---

work around:

copy paste the full source and run it as bookmark

full source:

$("#dulst-customCSS")[0].innerHTML="div[data-dulstclass~=\"Battle-Spell\"][data-location=\"me-FirstRow\"]{\ntop:500px !important\;\n}\ndiv[data-dulstclass~=\"Battle-Spell\"][data-location=\"opponent-FirstRow\"] {\ntop: 340px !important\;\n}";$('#content').click(function(){$("[id^=c-]").each(function(){if($(this).attr("data-location")==="opponent-SecondRow"||$(this).attr("data-location")==="opponent-FirstRow"){$(this).find("img")[0].src=$(this).attr("src");}});});$('#content').click(function(){$("[id^=c-]").each(function(){if($(this).attr("data-location")==="opponent-SecondRow"||$(this).attr("data-location")==="opponent-FirstRow"){$(this).find("img")[0].src=$(this).attr("src");}});});


Tutorial:

1. Copy the full source

picture for #1 :

2. Open your chrome bookmark

picture for #2:

3. Make a new bookmark

picture for #3:

4. Type    javascript:    in the address

picture for #4:

5. Paste the full source on the address after the javascript:

picture for #5:

6. Click the bookmark

picture for #6:

7. Enjoy your game :)

picture for #7:
