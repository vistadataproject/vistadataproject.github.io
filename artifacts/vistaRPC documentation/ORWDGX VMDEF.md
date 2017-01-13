---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDGX VMDEF 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDGX VMDEF{:/}
 tag | {::nomarkdown}VMDEF{:/}
 routine | [ORWDGX](http://code.osehra.org/dox/Routine_ORWDGX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Loads dialog data (lists & defaults) for a vitals order.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Return dialog definition for vitals/measurements
 Lines | ```{::nomarkdown} N ILST S ILST=0<br/> S LST($$NXT)="~Measurements" D MEASURE<br/> S LST($$NXT)="~Schedules" D VMSCHED```{:/}




 Generated on January 13th 2017, 7:11:26 am