---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPXRM GEC DIALOG<br/>
# ORQQPXRM GEC DIALOG

This RPC will evaluate the Reminder Dialogs as the Finish button is clickfor the GEC Project. THis RPC will return an error messages if the fourGEC Reminder Dialogs are done out of order.

## Properties

Property | Value
--- | ---
Label | GEC
MUMPS Implementation | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL |  | true | This is the Reminder Definition IEN or the Reminder Dialog IEN
DFN | LITERAL |  | true | Patient DFN
Visit | LITERAL |  | true | This is the Visit Encounter String
NOTEIEN | LITERAL |  | true | NOTEIEN is the progress Note IEN in file 8925.



## MUMPS Method Description

Property | Value
--- | ---
Method | [GEC^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Input Parameters | IEN, DFN, VISIT, NOTEIEN
Code | {::nomarkdown}<pre><code> D API^PXRMGECU(.ORRESULT,IEN,DFN,VISIT,1,NOTEIEN)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}