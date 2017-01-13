---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDOR VMSLCT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDOR VMSLCT{:/}
 tag | {::nomarkdown}VMSLCT{:/}
 routine | [ORWDOR](http://code.osehra.org/dox/Routine_ORWDOR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the default list for the vitals order dialog in CPRS GUI.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return default lists for vitals dialog
 Lines | ```{::nomarkdown} N ILST S ILST=0<br/> S LST($$NXT)="~Measurements" D MEAS<br/> S LST($$NXT)="~Schedules"    D SCHED```{:/}




 Generated on January 13th 2017, 7:11:26 am