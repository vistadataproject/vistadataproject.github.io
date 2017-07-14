---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; PXRM REMINDER DIALOG (TIU)<br/>
# PXRM REMINDER DIALOG (TIU)

Dialog for a given dialog ien.

## Properties

Property | Value
--- | ---
Label | TDIALOG
Routine | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DIALOG IEN | LITERAL | 16 | true | Reminder Dialog ien from #801.41



## MUMPS Method Description

Property | Value
--- | ---
Method | [TDIALOG^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Input Parameters | ORDLG, DFN
Code | {::nomarkdown}<pre><code> D DIALOG^PXRMRPCD(.ORY,ORDLG,DFN)<br/> I $P($G(ORY(1)),U)=-1 Q<br/> S ORY(0)=0_U_+$P($G(^PXRMD(801.41,ORDLG,0)),U,17)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}