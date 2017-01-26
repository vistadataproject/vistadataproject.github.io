---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; YTQ GAF HX 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}YTQ GAF HX{:/}
 tag | {::nomarkdown}GAFRET{:/}
 routine | [YTQAPI6](http://code.osehra.org/dox/Routine_YTQAPI6_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns all GAF diagnosis for a specified Patient Input: YS(\DFN\)= Pt DFN       YS(\END\)- Date of last GAF requested [optional]       YS(\BEGIN\) : Date of first GAF requested [optional]        YS(\LIMIT\): To limit output to the last x diagnosis Output:        YSDATA(1): [DATA] or [ERROR]        YSDATA(X): 627.8 IEN = external date of dx^GAF^rater DUZ^Rater                    name^error msg{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 8:30:45 pm</p>{:/}