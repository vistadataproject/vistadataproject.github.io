---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWGRPC DETAILS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWGRPC DETAILS{:/}
 tag | {::nomarkdown}DETAILS{:/}
 routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | DETAILS^[ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 Method comment | RPC - get report for type of data for a date or date range
 Input parameters | {::nomarkdown}DFN<br>DATE1<br>DATE2<br>TYPE<br>COMP{:/}
 Code | {::nomarkdown}  D DETAILS^ORWGAPI("ORWGRPC",DFN,DATE1,DATE2,TYPE,$G(COMP))<br> S ITEMS=$NA(^TMP("ORWGRPC",$J)){:/}


### CPRS

[rGraphs.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rGraphs.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}