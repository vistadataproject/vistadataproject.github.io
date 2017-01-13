---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORDEA LNKMSG 

 property | value 
--- | --- 
 label | {::nomarkdown}ORDEA LNKMSG{:/}
 tag | {::nomarkdown}LNKMSG{:/}
 routine | [ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
 return value type | {::nomarkdown}WORD PROCESSING{:/}
 description | {::nomarkdown}Returns the text of the OR DEA PIV LINK MSG parameter.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | message to display after successful PIV link for admin contact person
 Lines | ```
 N I,ORTY
 D GETWP^XPAR(.ORTY,"DIV^SYS^PKG","OR DEA PIV LINK MSG")
 S I=0 F  S I=$O(ORTY(I)) Q:'I  S ORY(I)=ORTY(I,0)```




 Generated on January 13th 2017, 6:55:29 am