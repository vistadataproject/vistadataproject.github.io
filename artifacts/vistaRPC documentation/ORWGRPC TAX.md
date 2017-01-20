---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWGRPC TAX 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWGRPC TAX{:/}
 tag | {::nomarkdown}TAX{:/}
 routine | [ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | TAX^[ORWGRPC](http://code.osehra.org/dox/Routine_ORWGRPC_source.html)
 Method comment | RPC - get reminder taxonomies
 Input parameters | {::nomarkdown}ALL<br>REMTAX{:/}
 Code | {::nomarkdown}  D TAX^ORWGAPI("ORWGRPC",+$G(ALL),.REMTAX)<br> S DATA=$NA(^TMP("ORWGRPC",$J)){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [rGraphs.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rGraphs.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}