---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTVICD ACTICD<br/>
# DENTVICD ACTICD

Verify that an ICD code is active as of a certain date

## Properties

Property | Value
--- | ---
Label | ACTICD
MUMPS Implementation | [DENTVICD](http://code.osehra.org/dox/Routine_DENTVICD_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VICD | LITERAL | 7 | true | This is the IEN or .01 field value from the DIAGNOSIS file (#80 - ^ICD9)
CDT | LITERAL | 14 | true | This date will be sued to check if the code was active as of that date. Default is today.
FUN | LITERAL | 1 | true | This flag will allow for the RPC to be used as an intrensic function. This value is not needed for GUI calls.
SYS | LITERAL | 2 | true | This is the ICD coding system you wish to use. 1  &#x3D; ICD-9 Diagnosis2  &#x3D; ICD-9 Procedure30 &#x3D; ICD-10 Diagnosis (Default)31 &#x3D; ICD-10 Procedure



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}