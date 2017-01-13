---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU TOOLMENU 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWU TOOLMENU{:/}
 tag | {::nomarkdown}TOOLMENU{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of items for the CPRS GUI Tools menu.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | returns a list of items for the Tools menu
 Lines | ```
 N ANENT
 S ANENT="ALL^"_$S($G(^VA(200,DUZ,5)):"^SRV.`"_+$G(^(5)),1:"")
 D GETLST^XPAR(.ORLST,ANENT,"ORWT TOOLS MENU","N")```




 Generated on January 13th 2017, 6:55:29 am