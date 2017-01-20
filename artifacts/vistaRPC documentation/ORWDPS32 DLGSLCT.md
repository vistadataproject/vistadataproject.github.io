---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS32 DLGSLCT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 DLGSLCT{:/}
 tag | {::nomarkdown}DLGSLCT{:/}
 routine | [ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns default lists for order dialogs in CPRS GUI.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PSTYPE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Code to determine the Dialog Type{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}LOCIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This will be set to the patient inpatient location IEN from file 44.{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | DLGSLCT^[ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
 Method comment | return def lists for dialog
 First comment | {::nomarkdown}<pre> PSTYPE: pharmacy type (U=unit dose, F=IV fluids, O=outpt)</pre>{:/}
 Input parameters | {::nomarkdown}PSTYPE<br>DFN<br>LOCIEN{:/}
 Code | {::nomarkdown}  N ILST S ILST=0<br> I PSTYPE="F" D  Q                       ; IV Fluids<br> . S LST($$NXT)="~ShortList"  D SHORT<br> . S LST($$NXT)="~Priorities" D PRIOR<br> . ;S LST($$NXT)="~Schedules"  D SCHED(LOCIEN)<br> . S LST($$NXT)="~Route" D IVROUTE<br> S LST($$NXT)="~ShortList"  D SHORT      ; Unit Dose & Outpt<br> S LST($$NXT)="~Priorities" D PRIOR<br> I PSTYPE="O" D                          ; Outpt<br> . S LST($$NXT)="~Pickup"   D PICKUP<br> . S LST($$NXT)="~SCStatus" D SCLIST{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:31 am</p>{:/}