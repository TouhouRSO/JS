/******************************************************************************
 * Animation : This script will shift the Attack Intercept Spell to the front *
 ******************************************************************************/
 
$("#dulst-customCSS")[0].innerHTML = "div[data-dulstclass~=\"Battle-Spell\"][data-location=\"me-FirstRow\"] {\n    top:540px !important\;\n}\ndiv[data-dulstclass~=\"Battle-Spell\"][data-location=\"opponent-FirstRow\"] {\n    top:380px !important\;\n}"