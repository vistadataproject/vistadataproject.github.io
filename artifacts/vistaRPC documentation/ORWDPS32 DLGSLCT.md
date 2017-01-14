---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDPS32 DLGSLCT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS32 DLGSLCT{:/}
 tag | {::nomarkdown}DLGSLCT{:/}
 routine | [ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns default lists for order dialogs in CPRS GUI.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PSTYPE{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Code to determine the Dialog Type{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 
| {::nomarkdown}LOCIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This will be set to the patient inpatient location IEN from file 44.{:/} | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | DLGSLCT^[ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
 Method comment | return def lists for dialog
 First comment | {::nomarkdown}PSTYPE: pharmacy type (U=unit dose, F=IV fluids, O=outpt){:/}
 Input parameters | {::nomarkdown}PSTYPE<br/>DFN<br/>LOCIEN{:/}
 Code | ```  N ILST S ILST=0
 I PSTYPE="F" D  Q                       ; IV Fluids
 . S LST($$NXT)="~ShortList"  D SHORT
 . S LST($$NXT)="~Priorities" D PRIOR
 . ;S LST($$NXT)="~Schedules"  D SCHED(LOCIEN)
 . S LST($$NXT)="~Route" D IVROUTE
 S LST($$NXT)="~ShortList"  D SHORT      ; Unit Dose & Outpt
 S LST($$NXT)="~Priorities" D PRIOR
 I PSTYPE="O" D                          ; Outpt
 . S LST($$NXT)="~Pickup"   D PICKUP
 . S LST($$NXT)="~SCStatus" D SCLIST```




 Generated on January 14th 2017, 7:26:35 am