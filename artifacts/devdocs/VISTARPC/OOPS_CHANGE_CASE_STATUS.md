---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; OOPS CHANGE CASE STATUS
# OOPS CHANGE CASE STATUS

This broker call passes in the ASISTS IEN, new case status and if the casestatus is deleted the reason for deletion.

Property | Value
--- | ---
Label | CHGCASE
Routine | [OOPSGUI6](http://code.osehra.org/dox/Routine_OOPSGUI6_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INPUT | LITERAL | 256 | true | The INPUT parameter has the format: IEN^CASE STATUS where IEN is the ASIST record IEN and CASE STATUS is the case status the claim should be changed to.
FLD58 | LITERAL | 80 |  | The parameter FLD58 is the text field Reason for Deletion if the case statushas been changed to deleted.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}