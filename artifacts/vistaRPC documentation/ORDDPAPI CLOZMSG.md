---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORDDPAPI CLOZMSG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORDDPAPI CLOZMSG{:/}
 tag | {::nomarkdown}CLOZMSG{:/}
 routine | [ORDDPAPI](http://code.osehra.org/dox/Routine_ORDDPAPI_source.html)
 return value type | {::nomarkdown}WORD PROCESSING{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | CLOZMSG^[ORDDPAPI](http://code.osehra.org/dox/Routine_ORDDPAPI_source.html)
 Code | {::nomarkdown}  N ERR,I<br> D GETWP^XPAR(.X,"SYS","OR CLOZ INPT MSG",,.ERR)<br> S I=0  F  S I=$O(X(I)) Q:I'>0  S ORARRAY(I)=$G(X(I,0))<br>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}