---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; YTQ GAF HX 

 property | value 
--- | --- 
 label | YTQ GAF HX
 tag | GAFRET
 routine | [YTQAPI6](http://code.osehra.org/dox/Routine_YTQAPI6_source.html)
 return value type | ARRAY
 description | Returns all GAF diagnosis for a specified Patient Input: YS(\DFN\)= Pt DFN       YS(\END\)- Date of last GAF requested [optional]       YS(\BEGIN\) : Date of first GAF requested [optional]        YS(\LIMIT\): To limit output to the last x diagnosis Output:        YSDATA(1): [DATA] or [ERROR]        YSDATA(X): 627.8 IEN = external date of dx^GAF^rater DUZ^Rater                    name^error msg