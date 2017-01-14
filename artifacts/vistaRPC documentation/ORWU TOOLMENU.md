---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWU TOOLMENU 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWU TOOLMENU{:/}
 tag | {::nomarkdown}TOOLMENU{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of items for the CPRS GUI Tools menu.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | TOOLMENU^[ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 Method comment | returns a list of items for the Tools menu
 Code | ```  N ANENT
 S ANENT="ALL^"_$S($G(^VA(200,DUZ,5)):"^SRV.`"_+$G(^(5)),1:"")
 D GETLST^XPAR(.ORLST,ANENT,"ORWT TOOLS MENU","N")```




 Generated on January 14th 2017, 7:26:35 am