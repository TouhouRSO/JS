Compilation of Animations and Fixes

How to use:

javascript:$.getScript('https://raw.githubusercontent.com/TouhouRSO/JS/master/fullPatch.js');void(0);

-----Dulst Doesnt Support Unlocal Script Usage So the above won't work---

work around:

copy paste the full source and run it as bookmark

full source:

$("#dulst-customCSS")[0].innerHTML="div[data-dulstclass~=\"Battle-Spell\"][data-location=\"me-FirstRow\"]{\ntop:500px !important\;\n}\ndiv[data-dulstclass~=\"Battle-Spell\"][data-location=\"opponent-FirstRow\"] {\ntop: 340px !important\;\n}";$('#content').click(function(){$("[id^=c-]").each(function(){if($(this).attr("data-location")==="opponent-SecondRow"||$(this).attr("data-location")==="opponent-FirstRow"){$(this).find("img")[0].src=$(this).attr("src");}});});$('#content').click(function(){$("[id^=c-]").each(function(){if($(this).attr("data-location")==="opponent-SecondRow"||$(this).attr("data-location")==="opponent-FirstRow"){$(this).find("img")[0].src=$(this).attr("src");}});});


Tutorial:

#1 Copy the full source

picture for #1 :

![alt text](http://puu.sh/9Qk6N/fd5739a06c.jpg)

#2 Open your chrome bookmark (ctrl + shift + o)

picture for #2:

![alt text](http://puu.sh/9QjEc/d3c83dd994.jpg)

#3 Make a new bookmark (right click -> add page...)

picture for #3:

![alt text](http://puu.sh/9QjHW/a16021b401.jpg)

#4 Type    javascript:    in the address

picture for #4:

![alt text](http://puu.sh/9QjMa/2308c88662.jpg)

#5 Paste the full source on the address after the javascript:

picture for #5:

![alt text](http://puu.sh/9QjOF/369c8efc4b.jpg)

#6 At the beginning of the match, click the bookmark

picture for #6:

![alt text](http://puu.sh/9QjYO/ed9eaf3e21.jpg)

#7 Enjoy your game :)
