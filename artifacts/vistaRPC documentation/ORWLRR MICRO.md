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

 Property | Value 
 --- | --- 
 Method | MICRO^[ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html)
 Method comment | Micro Report RPC
 Input parameters | {::nomarkdown}DFN, DATE1, DATE2{:/}
 Code | {::nomarkdown}  N ROOT<br> S ROOT=$$SET()<br> I $$REMOTE(.DFN,.ROOT) D MICRO^LR7OGM(.ORY,DFN,DATE1,DATE2)<br> D CLEAN(.ORY,.ROOT){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:08 am</p>{:/}