---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDOR VMSLCT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDOR VMSLCT{:/}
 tag | {::nomarkdown}VMSLCT{:/}
 routine | [ORWDOR](http://code.osehra.org/dox/Routine_ORWDOR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the default list for the vitals order dialog in CPRS GUI.{:/}


## MUMPS Method description

 property | value 
 --- | --- 
 Method | VMSLCT^[ORWDOR](http://code.osehra.org/dox/Routine_ORWDOR_source.html)
 Method comment | return default lists for vitals dialog
 Code | ```  N ILST S ILST=0
 S LST($$NXT)="~Measurements" D MEAS
 S LST($$NXT)="~Schedules"    D SCHED```




 Generated on January 14th 2017, 7:26:35 am