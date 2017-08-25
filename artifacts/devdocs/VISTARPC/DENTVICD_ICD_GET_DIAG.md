---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTVICD ICD GET DIAG<br/>
# DENTVICD ICD GET DIAG

This will return specific information for a diagnosis code

## Properties

Property | Value
--- | ---
Label | ICD
MUMPS Implementation | [DENTVICD](http://code.osehra.org/dox/Routine_DENTVICD_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VICD | LITERAL | 7 | true | This is the IEN or .01 field value from the DIAGNOSIS file (#80)
CDT | LITERAL | 14 | true | This is the date to be used to check if the code was active as of that date. The default value is TODAY.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}