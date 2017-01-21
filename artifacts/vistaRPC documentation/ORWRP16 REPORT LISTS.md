---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP16 REPORT LISTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP16 REPORT LISTS{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORWRP16](http://code.osehra.org/dox/Routine_ORWRP16_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This remote procedure call returns a list of reports,Health Summary types and date ranges that can be displayedat the workstation.There are no input parameters fo this rpc.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | LIST^[ORWRP16](http://code.osehra.org/dox/Routine_ORWRP16_source.html)
 Method comment | return lists for list boxes
 First comment | {::nomarkdown}<pre>  RPC: ORWRP REPORT LIST<br/>  See RPC definition for details on input and output parameters<br/></pre>{:/}
 Code | {::nomarkdown}  N EOF<br> S EOF="$$END",ROOT=$NA(^TMP($J,"ORPTLIST"))<br> K @ROOT<br> D GETRPTS(.ROOT,.EOF)<br> D GETHS(.ROOT,.EOF)<br> D GETDT(.ROOT,.EOF){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:52 am</p>{:/}