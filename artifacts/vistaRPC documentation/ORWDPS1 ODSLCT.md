---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS1 ODSLCT 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS1 ODSLCT{:/}
 tag | {::nomarkdown}ODSLCT{:/}
 routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### Method description

 property | value 
 --- | --- 
 Method comment | return default lists for dialog
 Input Parameters | {::nomarkdown}PSTYPE<br/>DFN<br/>LOC{:/}
 Lines | {::nomarkdown} N ILST S ILST=0<br/> S ILST=ILST+1,LST(ILST)="~Priority" D PRIOR<br/> S ILST=ILST+1,LST(ILST)="~DispMsg"<br/> S ILST=ILST+1,LST(ILST)="d"_$$DISPMSG<br/> I PSTYPE="O" D                                ; Outpatient<br/> . S ILST=ILST+1,LST(ILST)="~Refills"<br/> . S ILST=ILST+1,LST(ILST)="d0^0"<br/> . S ILST=ILST+1,LST(ILST)="~Pickup"<br/> . S ILST=ILST+1,LST(ILST)="d"_$$DEFPICK($G(LOC))<br/> . ; S ILST=ILST+1,LST(ILST)="~Supply"<br/> . ; S ILST=ILST+1,LST(ILST)="d^"_$$DEFSPLY(DFN){:/}
 Leading comment lines | {::nomarkdown}PSTYPE: pharmacy type (U=unit dose, F=IV fluids, O=outpatient){:/}




 Generated on January 13th 2017, 7:15:28 am