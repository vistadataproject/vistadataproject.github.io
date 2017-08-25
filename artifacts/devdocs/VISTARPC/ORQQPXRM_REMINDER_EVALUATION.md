---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPXRM REMINDER EVALUATION<br/>
# ORQQPXRM REMINDER EVALUATION

Allows evaluation of a list of reminders. Returns a list of clinicalreminders due/applicable or not applicable to the patient.

## Properties

Property | Value
--- | ---
Label | ALIST
MUMPS Implementation | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT ID | LITERAL | 16 | true | Patient identifier from the patient file [#2]
REMINDER ARRAY | LIST | 16 | true | List of reminders in format :             array(1) &#x3D; reminder ien1 (from #811.9)          array(2) &#x3D; reminder ien2          etc



## MUMPS Method Description

Property | Value
--- | ---
Method | [ALIST^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Method Comment | DBIA 3078
Input Parameters | ORPT, ORLIST
First Comment | {::nomarkdown}<pre><code><br/>ORQQPXRM REMINDERS APPLICABLE</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}