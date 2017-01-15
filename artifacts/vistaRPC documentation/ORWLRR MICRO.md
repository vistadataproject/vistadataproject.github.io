---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWLRR MICRO 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWLRR MICRO{:/}
 tag | {::nomarkdown}MICRO{:/}
 routine | [ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | MICRO^[ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html)
 Method comment | Micro Report RPC
 Input parameters | {::nomarkdown}DFN<br>DATE1<br>DATE2{:/}
 Code | {::nomarkdown}  N ROOT<br> S ROOT=$$SET()<br> I $$REMOTE(.DFN,.ROOT) D MICRO^LR7OGM(.ORY,DFN,DATE1,DATE2)<br> D CLEAN(.ORY,.ROOT){:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}