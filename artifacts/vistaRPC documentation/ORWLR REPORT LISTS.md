---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWLR REPORT LISTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWLR REPORT LISTS{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORWLR](http://code.osehra.org/dox/Routine_ORWLR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This remote procedure call returns a list of lab cumulative sections,and date ranges that can be displayed at the workstation.There are no input parameters fo this rpc.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | LIST^[ORWLR](http://code.osehra.org/dox/Routine_ORWLR_source.html)
 Method comment | return lists for list boxes
 First comment | {::nomarkdown}<pre>  RPC: ORWLR REPORT LIST</pre>{:/}
 Code | {::nomarkdown}  N EOF<br> S EOF="$$END",OROOT=$NA(^TMP($J,"ORLABLIST"))<br> K @OROOT<br> D GETRPTS(.OROOT,.EOF) ; -- get list of reports<br> D GETDT^ORWRP(.OROOT,.EOF) ; -- get list of date ranges{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">NOT OSEHRA CPRS</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:13 am</p>{:/}