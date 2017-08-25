---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; PSB INSTRUCTOR<br/>
# PSB INSTRUCTOR

Used by frmInstructor to validate that an instructor is at the client with a student.  Validation is acheived via the instructor entering their SSN and electronic signature code.  This is then validated against the NEW PERSON file (#200).  If a valid user is obtained, that user must posses the PSB INSTRUCTOR key to be passed back as an eligible instructor for the student.

## Properties

Property | Value
--- | ---
Label | INST
MUMPS Implementation | [PSBRPC](http://code.osehra.org/dox/Routine_PSBRPC_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PSBACC | LITERAL |  | true | Access Code edtSSN component on frmInstructor.
PSBVER |  |  | true | Verify Codeinstructor into the edtESIG component on frmInstructor.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}