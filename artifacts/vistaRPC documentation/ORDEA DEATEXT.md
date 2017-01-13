---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORDEA DEATEXT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORDEA DEATEXT{:/}
 tag | {::nomarkdown}DEATEXT{:/}
 routine | [ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 return value type | {::nomarkdown}WORD PROCESSING{:/}
 description | {::nomarkdown}Returns the text to show on the signature dialog mandated by DEA for when a controlled substance order is selected to be signed.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | returns the mandatory dea text to show when a user checks a controlled substance order to be signed on the signature dialog
 Lines | {::nomarkdown} N I,ORTY<br/> D GETWP^XPAR(.ORTY,"SYS","OR DEA TEXT")<br/> S I=0 F  S I=$O(ORTY(I)) Q:'I  S ORY(I)=ORTY(I,0){:/}




 Generated on January 13th 2017, 7:15:28 am