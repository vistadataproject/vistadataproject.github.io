---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWRP REPORT LISTS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP REPORT LISTS{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORWRP](http://code.osehra.org/dox/Routine_ORWRP_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This remote procedure call returns a list of reports,Health Summary types and date ranges that can be displayedat the workstation.There are no input parameters fo this rpc.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | report lists for reports tab
 Lines | ```
 N EOF,ROOT
 S EOF="$$END",ROOT=$NA(LST)
 K @ROOT
 D GETRPTS(.ROOT,.EOF) ; -report list
 D GETHS(.ROOT,.EOF) ; -health summary types
 D GETDT(.ROOT,.EOF) ; -date ranges```
 Leading comment lines | {::nomarkdown}RPC: ORWRP REPORT LIST{:/}




 Generated on January 13th 2017, 6:55:28 am