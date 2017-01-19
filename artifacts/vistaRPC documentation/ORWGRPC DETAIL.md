---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWGRPC DETAIL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWGRPC DETAIL{:/}
 tag | {::nomarkdown}DETAIL{:/}
 routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### MUMPS Method description

 property | value 
 --- | --- 
 Method | DETAIL^[ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 Method comment | RPC - get all reports for types of data from items and date range
 Input parameters | {::nomarkdown}DFN<br>DATE1<br>DATE2<br>VAL<br>COMP{:/}
 Code | {::nomarkdown}  D DETAIL^ORWGAPI("ORWGRPC",DFN,DATE1,DATE2,.VAL,$G(COMP))<br> S ITEMS=$NA(^TMP("ORWGRPC",$J)){:/}


### CPRS

[rGraphs.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rGraphs.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}