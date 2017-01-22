---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWORR RGET 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWORR RGET{:/}
 tag | {::nomarkdown}RGET{:/}
 routine | [ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | RGET^[ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html)
 Method comment | Orders of AutoDC/Release Event
 Input parameters | {::nomarkdown}DFN, FILTER, GROUPS, DTFROM, DTTHRU, EVENT{:/}
 Code | {::nomarkdown}  N EVTDCREL<br> S EVTDCREL="TRUE"<br> D AGET(.REF,DFN,FILTER,GROUPS,DTFROM,DTTHRU,EVENT){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}