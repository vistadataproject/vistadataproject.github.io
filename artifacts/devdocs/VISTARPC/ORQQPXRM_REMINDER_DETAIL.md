---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPXRM REMINDER DETAIL<br/>
# ORQQPXRM REMINDER DETAIL

Returns the details of a clinical reminder

## Properties

Property | Value
--- | ---
Label | REMDET
MUMPS Implementation | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT ID | LITERAL | 16 | true | Patient identifier from Patient file [#2]
CLINICAL REMINDER ID | LITERAL | 16 | true | Clinical reminder (ien) from CLINICAL REMINDER DEFINITION file [#811.9]



## MUMPS Method Description

Property | Value
--- | ---
Method | [REMDET^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Method Comment | DBIA 3078
Input Parameters | ORPT, ORIEN
First Comment | {::nomarkdown}<pre><code><br/>ORQQPXRM REMINDER INQUIRY</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}