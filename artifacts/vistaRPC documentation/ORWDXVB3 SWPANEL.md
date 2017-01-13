---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXVB3 SWPANEL 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXVB3 SWPANEL{:/}
 tag | {::nomarkdown}SWPANEL{:/}
 routine | [ORWDXVB3](http://code.osehra.org/dox/Routine_ORWDXVB3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC checks the value of the parameter OR VBECS DIAGNOSTIC PANEL 1STto determine the location of the Diagnostic and Component panels on theVBECS order dialog.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Switch the location of the Diagnostic and Component panels on VBECS Order Dialog
 Lines | ```
 S OROOT=+$$GET^XPAR("ALL","OR VBECS DIAGNOSTIC PANEL 1ST",1,"I")
```




 Generated on January 13th 2017, 6:55:29 am