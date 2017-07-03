---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORWDGX VMDEF
# ORWDGX VMDEF

Loads dialog data (lists & defaults) for a vitals order.

Property | Value
--- | ---
Label | VMDEF
Routine | [ORWDGX](http://code.osehra.org/dox/Routine_ORWDGX_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [VMDEF^ORWDGX](http://code.osehra.org/dox/Routine_ORWDGX_source.html)
Method Comment | Return dialog definition for vitals/measurements
Code | {::nomarkdown}<pre><code> N ILST S ILST=0<br/> S LST($$NXT)="~Measurements" D MEASURE<br/> S LST($$NXT)="~Schedules" D VMSCHED</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}