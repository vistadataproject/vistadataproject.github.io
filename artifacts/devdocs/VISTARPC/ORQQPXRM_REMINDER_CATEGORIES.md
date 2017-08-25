---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPXRM REMINDER CATEGORIES<br/>
# ORQQPXRM REMINDER CATEGORIES

Returns list of all CPRS lookup categories and associated reminders

## Properties

Property | Value
--- | ---
Label | CATEGORY
MUMPS Implementation | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT ID | LITERAL | 16 | true | Patient Identifier from Patient file [#2]
HOSPITAL LOCATION | LITERAL | 16 | true | Patient&#x27;s HOSPITAL LOCATION [#44]. May be null.



## MUMPS Method Description

Property | Value
--- | ---
Method | [CATEGORY^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Input Parameters | ORPT, ORLOC
Code | {::nomarkdown}<pre><code> D CATEGORY^PXRMRPCA(.ORY,ORPT,ORLOC) Q  ; DBIA 3078</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}