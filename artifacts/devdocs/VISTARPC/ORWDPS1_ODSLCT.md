---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDPS1 ODSLCT
# ORWDPS1 ODSLCT



Property | Value
--- | ---
Label | ODSLCT
Routine | [ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [ODSLCT^ORWDPS1](http://code.osehra.org/dox/Routine_ORWDPS1_source.html)
Method Comment | return default lists for dialog
Input Parameters | PSTYPE, DFN, LOC
First Comment | {::nomarkdown}<pre><code> PSTYPE: pharmacy type (U=unit dose, F=IV fluids, O=outpatient)</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ILST S ILST=0<br/> S ILST=ILST+1,LST(ILST)="~Priority" D PRIOR<br/> S ILST=ILST+1,LST(ILST)="~DispMsg"<br/> S ILST=ILST+1,LST(ILST)="d"_$$DISPMSG<br/> I PSTYPE="O" D                                ; Outpatient<br/> . S ILST=ILST+1,LST(ILST)="~Refills"<br/> . S ILST=ILST+1,LST(ILST)="d0^0"<br/> . S ILST=ILST+1,LST(ILST)="~Pickup"<br/> . S ILST=ILST+1,LST(ILST)="d"_$$DEFPICK($G(LOC))<br/> . ; S ILST=ILST+1,LST(ILST)="~Supply"<br/> . ; S ILST=ILST+1,LST(ILST)="d^"_$$DEFSPLY(DFN)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODMeds.pas">Orders/rODMeds.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}