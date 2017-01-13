---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORDDPAPI CLOZMSG 

 property | value 
--- | --- 
 label | {::nomarkdown}ORDDPAPI CLOZMSG{:/}
 tag | {::nomarkdown}CLOZMSG{:/}
 routine | [ORDDPAPI](http://code.osehra.org/dox/Routine_ORDDPAPI_source.html)
 return value type | {::nomarkdown}WORD PROCESSING{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Lines | {::nomarkdown} N ERR,I<br/> D GETWP^XPAR(.X,"SYS","OR CLOZ INPT MSG",,.ERR)<br/> S I=0  F  S I=$O(X(I)) Q:I'>0  S ORARRAY(I)=$G(X(I,0))<br/>{:/}




 Generated on January 13th 2017, 7:15:28 am