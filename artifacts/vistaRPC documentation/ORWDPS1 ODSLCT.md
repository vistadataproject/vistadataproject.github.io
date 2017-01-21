---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDPS1 ODSLCT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDPS1 ODSLCT{:/}
 tag | {::nomarkdown}ODSLCT{:/}
 routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | ODSLCT^[ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
 Method comment | return default lists for dialog
 Input parameters | {::nomarkdown}PSTYPE, DFN, LOC{:/}
 First comment | {::nomarkdown}<pre> PSTYPE: pharmacy type (U=unit dose, F=IV fluids, O=outpatient)</pre>{:/}
 Code | {::nomarkdown}  N ILST S ILST=0<br> S ILST=ILST+1,LST(ILST)="~Priority" D PRIOR<br> S ILST=ILST+1,LST(ILST)="~DispMsg"<br> S ILST=ILST+1,LST(ILST)="d"_$$DISPMSG<br> I PSTYPE="O" D                                ; Outpatient<br> . S ILST=ILST+1,LST(ILST)="~Refills"<br> . S ILST=ILST+1,LST(ILST)="d0^0"<br> . S ILST=ILST+1,LST(ILST)="~Pickup"<br> . S ILST=ILST+1,LST(ILST)="d"_$$DEFPICK($G(LOC))<br> . ; S ILST=ILST+1,LST(ILST)="~Supply"<br> . ; S ILST=ILST+1,LST(ILST)="d^"_$$DEFSPLY(DFN){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:09 am</p>{:/}