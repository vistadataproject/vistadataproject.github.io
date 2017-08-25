---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPXRM REMINDERS APPLICABLE<br/>
# ORQQPXRM REMINDERS APPLICABLE

Returns a list of clinical reminders due/applicable or not applicable tothe patient.

## Properties

Property | Value
--- | ---
Label | APPL
MUMPS Implementation | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT ID | LITERAL | 16 | true | Patient identifier from the patient file [#2]
HOSPITAL LOCATION | LITERAL | 16 |  | Patients location from HOSPITAL LOCATION [#44]. May be null.



## MUMPS Method Description

Property | Value
--- | ---
Method | [APPL^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Input Parameters | ORPT, ORLOC
First Comment | {::nomarkdown}<pre><code>D APPL^PXRMRPCA(.ORY,ORPT,ORLOC) Q  ; DBIA 3078<br/><br/>ORQQPXRM REMINDER CATEGORIES</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCover.pas">rCover.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}