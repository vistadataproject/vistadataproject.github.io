---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; ORWPCE GET SET OF CODES<br/>
# ORWPCE GET SET OF CODES

Returns values for a set of codes given a file and field number.

**Native RPC Documentation:** [ORWPCE GET SET OF CODES](../VISTARPC/ORWPCE_GET_SET_OF_CODES)

**MUMPS Implementation:** [GETSET^ORWPCE2](http://code.osehra.org/dox/Routine_ORWPCE2_source.html)

## Properties

Property | Value
--- | ---
Type | Non-Clinical
Domain | Others
Class | READ
Complexity | MODERATE
Uses | 
Return Type | ARRAY
Return Description | 
File Types Used | MULTIPLE
Parameters Used | None


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
ORWFILE | LITERAL | true | The file to evaluate | 9000010.12
ORWFIELD | LITERAL | true | The field of the file to evaluate | .04
ORWNULL | LITERAL | false | Specifies whether or not an option should NOT be selected (1 if not selected, 0 if selected) | 1

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:46 pm</p>{:/}