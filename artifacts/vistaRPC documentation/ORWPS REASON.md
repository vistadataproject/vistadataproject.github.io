---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPS REASON 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPS REASON{:/}
 tag | {::nomarkdown}REASON{:/}
 routine | [ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns list of Statement/Reasons for Non-VA medication orders.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | REASON^[ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html)
 Method comment | Return Non-VA Med Statement/Reasons
 Code | {::nomarkdown}  N ORE<br> D GETLST^XPAR(.ORY,"ALL","ORWD NONVA REASON","E")<br>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}