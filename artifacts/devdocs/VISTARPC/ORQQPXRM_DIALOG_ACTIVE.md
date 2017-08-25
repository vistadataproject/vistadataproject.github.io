---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQPXRM DIALOG ACTIVE<br/>
# ORQQPXRM DIALOG ACTIVE

For a list of reminders [#811.9] returns same list with status to indicateif an active dialog exists for the reminder.

## Properties

Property | Value
--- | ---
Label | ACTIVE
MUMPS Implementation | [ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CLINICAL REMINDER IEN | LITERAL | 16 | true | Array of clinical reminder iens [#811.9] to be checked.



## MUMPS Method Description

Property | Value
--- | ---
Method | [ACTIVE^ORQQPXRM](http://code.osehra.org/dox/Routine_ORQQPXRM_source.html)
Method Comment | DBIA 3080
Input Parameters | ORLIST
First Comment | {::nomarkdown}<pre><code><br/>ORQQPXRM REMINDER EVALUATION</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rReminders.pas">rReminders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}