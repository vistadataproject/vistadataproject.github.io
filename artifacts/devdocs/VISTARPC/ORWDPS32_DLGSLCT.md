---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDPS32 DLGSLCT<br/>
# ORWDPS32 DLGSLCT

Returns default lists for order dialogs in CPRS GUI.

## Properties

Property | Value
--- | ---
Label | DLGSLCT
MUMPS Implementation | [ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PSTYPE | LITERAL |  | true | Code to determine the Dialog Type
DFN | LITERAL |  | true | 
LOCIEN | LITERAL |  | true | This will be set to the patient inpatient location IEN from file 44.



## MUMPS Method Description

Property | Value
--- | ---
Method | [DLGSLCT^ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
Method Comment | return def lists for dialog
Input Parameters | PSTYPE, DFN, LOCIEN
First Comment | {::nomarkdown}<pre><code> PSTYPE: pharmacy type (U=unit dose, F=IV fluids, O=outpt)</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N ILST S ILST=0<br/> I PSTYPE="F" D  Q                       ; IV Fluids<br/> . S LST($$NXT)="~ShortList"  D SHORT<br/> . S LST($$NXT)="~Priorities" D PRIOR<br/> . ;S LST($$NXT)="~Schedules"  D SCHED(LOCIEN)<br/> . S LST($$NXT)="~Route" D IVROUTE<br/> S LST($$NXT)="~ShortList"  D SHORT      ; Unit Dose & Outpt<br/> S LST($$NXT)="~Priorities" D PRIOR<br/> I PSTYPE="O" D                          ; Outpt<br/> . S LST($$NXT)="~Pickup"   D PICKUP<br/> . S LST($$NXT)="~SCStatus" D SCLIST</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODBase.pas">Orders/rODBase.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}