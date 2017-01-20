---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDOR VMSLCT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDOR VMSLCT{:/}
 tag | {::nomarkdown}VMSLCT{:/}
 routine | [ORWDOR](http://code.osehra.org/dox/Routine_ORWDOR_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns the default list for the vitals order dialog in CPRS GUI.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | VMSLCT^[ORWDOR](http://code.osehra.org/dox/Routine_ORWDOR_source.html)
 Method comment | return default lists for vitals dialog
 Code | {::nomarkdown}  N ILST S ILST=0<br> S LST($$NXT)="~Measurements" D MEAS<br> S LST($$NXT)="~Schedules"    D SCHED{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [Orders/rODBase.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas)


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}