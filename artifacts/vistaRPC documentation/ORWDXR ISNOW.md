---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXR ISNOW 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXR ISNOW{:/}
 tag | {::nomarkdown}ISNOW{:/}
 routine | [ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ISNOW^[ORWDXR](http://code.osehra.org/dox/Routine_ORWDXR_source.html)
 Method comment | Is first time now order?
 Input parameters | {::nomarkdown}ORID{:/}
 Code | {::nomarkdown}  N SCH<br> Q:'$D(^OR(100,+ORID,0))<br> S SCH=""<br> S SCH=$O(^OR(100,+ORID,4.5,"ID","SCHEDULE",0))<br> S:SCH SCH=$G(^OR(100,+ORID,4.5,SCH,1))<br> S:SCH="NOW" ORY=1<br>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rMeds.pas">rMeds.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}