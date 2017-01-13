---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORDDPAPI ADMTIME 

 property | value 
--- | --- 
 label | {::nomarkdown}ORDDPAPI ADMTIME{:/}
 tag | {::nomarkdown}ADMTIME{:/}
 routine | [ORDDPAPI](http://code.osehra.org/dox/Routine_ORDDPAPI_source.html)
 return value type | {::nomarkdown}WORD PROCESSING{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Lines | ```
 N ERR,I
 D GETWP^XPAR(.X,"SYS","OR ADMIN TIME HELP TEXT",,.ERR)
 S I=0  F  S I=$O(X(I)) Q:I'>0  S ORARRAY(I)=$G(X(I,0))```




 Generated on January 13th 2017, 6:55:29 am