---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWDPS1 ODSLCT 


 ## VISTA File 8994
 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS1 ODSLCT{:/}
 tag | {::nomarkdown}ODSLCT{:/}
 routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ODSLCT^[ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 Method comment | return default lists for dialog
 First comment | {::nomarkdown}PSTYPE: pharmacy type (U=unit dose, F=IV fluids, O=outpatient){:/}
 Input parameters | {::nomarkdown}PSTYPE<br/>DFN<br/>LOC{:/}
 Code | ```  N ILST S ILST=0
 S ILST=ILST+1,LST(ILST)="~Priority" D PRIOR
 S ILST=ILST+1,LST(ILST)="~DispMsg"
 S ILST=ILST+1,LST(ILST)="d"_$$DISPMSG
 I PSTYPE="O" D                                ; Outpatient
 . S ILST=ILST+1,LST(ILST)="~Refills"
 . S ILST=ILST+1,LST(ILST)="d0^0"
 . S ILST=ILST+1,LST(ILST)="~Pickup"
 . S ILST=ILST+1,LST(ILST)="d"_$$DEFPICK($G(LOC))
 . ; S ILST=ILST+1,LST(ILST)="~Supply"
 . ; S ILST=ILST+1,LST(ILST)="d^"_$$DEFSPLY(DFN)```




 Generated on January 14th 2017, 7:26:35 am