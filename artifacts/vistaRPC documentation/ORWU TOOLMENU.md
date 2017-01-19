---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWU TOOLMENU 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWU TOOLMENU{:/}
 tag | {::nomarkdown}TOOLMENU{:/}
 routine | [ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of items for the CPRS GUI Tools menu.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | TOOLMENU^[ORWU](http://code.osehra.org/dox/Routine_ORWU_source.html)
 Method comment | returns a list of items for the Tools menu
 Code | {::nomarkdown}  N ANENT<br> S ANENT="ALL^"_$S($G(^VA(200,DUZ,5)):"^SRV.`"_+$G(^(5)),1:"")<br> D GETLST^XPAR(.ORLST,ANENT,"ORWT TOOLS MENU","N"){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}