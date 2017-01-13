---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWLR REPORT LISTS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWLR REPORT LISTS{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORWLR](http://code.osehra.org/dox/Routine_ORWLR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This remote procedure call returns a list of lab cumulative sections,and date ranges that can be displayed at the workstation.There are no input parameters fo this rpc.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return lists for list boxes
 Lines | ```
 N EOF
 S EOF="$$END",OROOT=$NA(^TMP($J,"ORLABLIST"))
 K @OROOT
 D GETRPTS(.OROOT,.EOF) ; -- get list of reports
 D GETDT^ORWRP(.OROOT,.EOF) ; -- get list of date ranges```
 Leading comment lines | {::nomarkdown}RPC: ORWLR REPORT LIST{:/}




 Generated on January 13th 2017, 6:55:28 am