---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDGX VMDEF<br/>
# ORWDGX VMDEF

Loads dialog data (lists & defaults) for a vitals order.

## Properties

Property | Value
--- | ---
Label | VMDEF
MUMPS Implementation | [ORWDGX](http://code.osehra.org/dox/Routine_ORWDGX_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [VMDEF^ORWDGX](http://code.osehra.org/dox/Routine_ORWDGX_source.html)
Method Comment | Return dialog definition for vitals/measurements
Code | {::nomarkdown}<pre><code> N ILST S ILST=0<br/> S LST($$NXT)="~Measurements" D MEASURE<br/> S LST($$NXT)="~Schedules" D VMSCHED</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}