---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWLRR INTERIM 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWLRR INTERIM{:/}
 tag | {::nomarkdown}INTERIM{:/}
 routine | [ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | INTERIM^[ORWLRR](http://code.osehra.org/dox/Routine_ORWLRR_source.html)
 Method comment | Interim Report RPC (All Tests by Date)
 Input parameters | {::nomarkdown}DFN, DATE1, DATE2{:/}
 Code | {::nomarkdown}  N ROOT<br> S ROOT=$$SET()<br> I $$REMOTE(.DFN,.ROOT) D INTERIM^LR7OGM(.ORY,DFN,DATE1,DATE2)<br> D CLEAN(.ORY,.ROOT){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">Executable Only</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}