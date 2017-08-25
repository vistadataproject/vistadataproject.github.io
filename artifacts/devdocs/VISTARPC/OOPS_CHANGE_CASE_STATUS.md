---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; OOPS CHANGE CASE STATUS<br/>
# OOPS CHANGE CASE STATUS

This broker call passes in the ASISTS IEN, new case status and if the casestatus is deleted the reason for deletion.

## Properties

Property | Value
--- | ---
Label | CHGCASE
MUMPS Implementation | [OOPSGUI6](http://code.osehra.org/dox/Routine_OOPSGUI6_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LITERAL | 256 | true | The INPUT parameter has the format: IEN^CASE STATUS where IEN is the ASIST record IEN and CASE STATUS is the case status the claim should be changed to.
FLD58 | LITERAL | 80 |  | The parameter FLD58 is the text field Reason for Deletion if the case statushas been changed to deleted.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}