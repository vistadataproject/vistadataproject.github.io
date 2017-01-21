---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP REPORT LISTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP REPORT LISTS{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This remote procedure call returns a list of reports,Health Summary types and date ranges that can be displayedat the workstation.There are no input parameters fo this rpc.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | LIST^[ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
 Method comment | report lists for reports tab
 First comment | {::nomarkdown}<pre>  RPC: ORWRP REPORT LIST</pre>{:/}
 Code | {::nomarkdown}  N EOF,ROOT<br> S EOF="$$END",ROOT=$NA(LST)<br> K @ROOT<br> D GETRPTS(.ROOT,.EOF) ; -report list<br> D GETHS(.ROOT,.EOF) ; -health summary types<br> D GETDT(.ROOT,.EOF) ; -date ranges{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReports.pas">rReports.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}