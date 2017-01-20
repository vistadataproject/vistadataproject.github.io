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
 Input parameters | {::nomarkdown}DFN<br>FILTER<br>GROUPS<br>DTFROM<br>DTTHRU<br>EVENT{:/}
 Code | {::nomarkdown}  N EVTDCREL<br> S EVTDCREL="TRUE"<br> D AGET(.REF,DFN,FILTER,GROUPS,DTFROM,DTTHRU,EVENT){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [Orders/rOrders.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}