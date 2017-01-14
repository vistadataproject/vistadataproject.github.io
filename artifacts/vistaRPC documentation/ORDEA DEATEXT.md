---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORDEA DEATEXT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORDEA DEATEXT{:/}
 tag | {::nomarkdown}DEATEXT{:/}
 routine | [ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 return value type | {::nomarkdown}WORD PROCESSING{:/}
 description | {::nomarkdown}Returns the text to show on the signature dialog mandated by DEA for when a controlled substance order is selected to be signed.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DEATEXT^[ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 Method comment | returns the mandatory dea text to show when a user checks a controlled substance order to be signed on the signature dialog
 Code | ```  N I,ORTY
 D GETWP^XPAR(.ORTY,"SYS","OR DEA TEXT")
 S I=0 F  S I=$O(ORTY(I)) Q:'I  S ORY(I)=ORTY(I,0)```




 Generated on January 14th 2017, 7:26:36 am