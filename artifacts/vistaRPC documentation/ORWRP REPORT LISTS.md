---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWRP REPORT LISTS 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP REPORT LISTS{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This remote procedure call returns a list of reports,Health Summary types and date ranges that can be displayedat the workstation.There are no input parameters fo this rpc.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | LIST^[ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
 Method comment | report lists for reports tab
 First comment | {::nomarkdown}RPC: ORWRP REPORT LIST{:/}
 Code | ```  N EOF,ROOT<br/> S EOF="$$END",ROOT=$NA(LST)<br/> K @ROOT<br/> D GETRPTS(.ROOT,.EOF) ; -report list<br/> D GETHS(.ROOT,.EOF) ; -health summary types<br/> D GETDT(.ROOT,.EOF) ; -date ranges```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}