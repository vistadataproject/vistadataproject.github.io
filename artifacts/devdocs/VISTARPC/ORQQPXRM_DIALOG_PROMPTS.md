---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPXRM DIALOG PROMPTS<br/>
# ORQQPXRM DIALOG PROMPTS

Additional prompts for a given dialog element

## Properties

Property | Value
--- | ---
Label | PROMPT
Routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DIALOG ELEMENT IEN | LITERAL | 16 | true | Reminder dialog element identifier (ien) from REMINDER DIALOG file[#801.41]
CURRENT/HISTORICAL | LITERAL | 16 |  | Used only for taxonomy dialogs.     0 - Current Diagnosis/Procedure  1 - Historical Diagnosis/Procedure
DIALOG LINE CPT/POV | LITERAL | 3 |  | For taxonomy dialog the type of finding (POV/CPT) for this dialog line



## MUMPS Method Description

Property | Value
--- | ---
Method | [PROMPT^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Input Parameters | ORDLG, ORDCUR, ORFTYP
Code | {::nomarkdown}<pre><code> D PROMPT^PXRMRPCC(.ORY,ORDLG,ORDCUR,ORFTYP) Q  ; DBIA 3080</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}