Compilation of Animations and Fixes

How to use:

javascript:$.getScript('https://raw.githubusercontent.com/TouhouRSO/JS/master/fullPatch.js');void(0);

-----Dulst Doesnt Support Unlocal Script Usage So the above won't work---

work around:

copy paste the full source and run it as bookmark

full source:

$("#dulst-customCSS")[0].innerHTML="div[data-dulstclass~=\"Battle-Spell\"][data-location=\"me-FirstRow\"]{\ntop:540px !important\;\n}\ndiv[data-dulstclass~=\"Battle-Spell\"][data-location=\"opponent-FirstRow\"] {\ntop: 380px !important\;\n}";$('#content').click(function(){$("[id^=c-]").each(function(){if($(this).attr("data-location")==="opponent-SecondRow"||$(this).attr("data-location")==="opponent-FirstRow"){$(this).find("img")[0].src=$(this).attr("src");}});});$('#content').click(function(){$("[id^=c-]").each(function(){if($(this).attr("data-location")==="opponent-SecondRow"||$(this).attr("data-location")==="opponent-FirstRow"){$(this).find("img")[0].src=$(this).attr("src");}});});


Tutorial:

#1 Copy the full source

picture for #1 :

![alt text](https://raw.githubusercontent.com/TouhouRSO/JS/master/tutorialPictures/%231.jpg)

#2 Open your chrome bookmark (ctrl + shift + o)

picture for #2:

![alt text](https://raw.githubusercontent.com/TouhouRSO/JS/master/tutorialPictures/%232.jpg)

#3 Make a new bookmark (right click -> add page...)

picture for #3:

![alt text](https://raw.githubusercontent.com/TouhouRSO/JS/master/tutorialPictures/%233.jpg)

#4 Type    javascript:    in the address

picture for #4:

![alt text](https://raw.githubusercontent.com/TouhouRSO/JS/master/tutorialPictures/%234.jpg)

#5 Paste the full source on the address after the javascript:

picture for #5:

![alt text](https://raw.githubusercontent.com/TouhouRSO/JS/master/tutorialPictures/%235.jpg)

#6 At the beginning of the match, click the bookmark

picture for #6:

![alt text](https://raw.githubusercontent.com/TouhouRSO/JS/master/tutorialPictures/%236.jpg)

#7 Enjoy your game :)
