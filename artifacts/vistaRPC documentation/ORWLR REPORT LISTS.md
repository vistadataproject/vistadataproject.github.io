---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWLR REPORT LISTS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWLR REPORT LISTS{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORWLR](http://code.osehra.org/dox/Routine_ORWLR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This remote procedure call returns a list of lab cumulative sections,and date ranges that can be displayed at the workstation.There are no input parameters fo this rpc.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | LIST^[ORWLR](http://code.osehra.org/dox/Routine_ORWLR_source.html)
 Method comment | return lists for list boxes
 First comment | {::nomarkdown}RPC: ORWLR REPORT LIST{:/}
 Code | ```  N EOF
 S EOF="$$END",OROOT=$NA(^TMP($J,"ORLABLIST"))
 K @OROOT
 D GETRPTS(.OROOT,.EOF) ; -- get list of reports
 D GETDT^ORWRP(.OROOT,.EOF) ; -- get list of date ranges```




 Generated on January 14th 2017, 7:26:35 am