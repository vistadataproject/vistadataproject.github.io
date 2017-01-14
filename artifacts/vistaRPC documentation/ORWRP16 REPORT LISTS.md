---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWRP16 REPORT LISTS 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWRP16 REPORT LISTS{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORWRP16](http://code.osehra.org/dox/Routine_ORWRP16_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This remote procedure call returns a list of reports,Health Summary types and date ranges that can be displayedat the workstation.There are no input parameters fo this rpc.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | LIST^[ORWRP16](http://code.osehra.org/dox/Routine_ORWRP16_source.html)
 Method comment | return lists for list boxes
 First comment | {::nomarkdown}RPC: ORWRP REPORT LIST<br/>See RPC definition for details on input and output parameters{:/}
 Code | ```  N EOF
 S EOF="$$END",ROOT=$NA(^TMP($J,"ORPTLIST"))
 K @ROOT
 D GETRPTS(.ROOT,.EOF)
 D GETHS(.ROOT,.EOF)
 D GETDT(.ROOT,.EOF)```




 Generated on January 14th 2017, 7:26:35 am