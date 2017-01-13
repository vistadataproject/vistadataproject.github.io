---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPS REASON 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPS REASON{:/}
 tag | {::nomarkdown}REASON{:/}
 routine | [ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns list of Statement/Reasons for Non-VA medication orders.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return Non-VA Med Statement/Reasons
 Lines | ```{::nomarkdown} N ORE<br/> D GETLST^XPAR(.ORY,"ALL","ORWD NONVA REASON","E")<br/>```{:/}




 Generated on January 13th 2017, 7:11:27 am