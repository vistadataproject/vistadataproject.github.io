---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDOR VMSLCT<br/>
# ORWDOR VMSLCT

Returns the default list for the vitals order dialog in CPRS GUI.

## Properties

Property | Value
--- | ---
Label | VMSLCT
MUMPS Implementation | [ORWDOR](http://code.osehra.org/dox/Routine_ORWDOR_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [VMSLCT^ORWDOR](http://code.osehra.org/dox/Routine_ORWDOR_source.html)
Method Comment | return default lists for vitals dialog
Code | {::nomarkdown}<pre><code> N ILST S ILST=0<br/> S LST($$NXT)="~Measurements" D MEAS<br/> S LST($$NXT)="~Schedules"    D SCHED</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}