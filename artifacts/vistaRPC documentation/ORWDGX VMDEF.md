---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDGX VMDEF 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDGX VMDEF{:/}
 tag | {::nomarkdown}VMDEF{:/}
 routine | [ORWDGX](http://code.osehra.org/dox/Routine_ORWDGX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Loads dialog data (lists & defaults) for a vitals order.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | VMDEF^[ORWDGX](http://code.osehra.org/dox/Routine_ORWDGX_source.html)
 Method comment | Return dialog definition for vitals/measurements
 Code | ```  N ILST S ILST=0
 S LST($$NXT)="~Measurements" D MEASURE
 S LST($$NXT)="~Schedules" D VMSCHED```




 Generated on January 14th 2017, 7:26:35 am