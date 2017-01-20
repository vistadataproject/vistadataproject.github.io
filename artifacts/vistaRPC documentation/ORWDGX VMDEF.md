---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDGX VMDEF 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDGX VMDEF{:/}
 tag | {::nomarkdown}VMDEF{:/}
 routine | [ORWDGX](http://code.osehra.org/dox/Routine_ORWDGX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Loads dialog data (lists & defaults) for a vitals order.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | VMDEF^[ORWDGX](http://code.osehra.org/dox/Routine_ORWDGX_source.html)
 Method comment | Return dialog definition for vitals/measurements
 Code | {::nomarkdown}  N ILST S ILST=0<br> S LST($$NXT)="~Measurements" D MEASURE<br> S LST($$NXT)="~Schedules" D VMSCHED{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [NOT OSEHRA CPRS]()


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:06 am</p>{:/}