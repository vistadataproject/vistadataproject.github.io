---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG DICOM GET GATEWAY INFO
# MAG DICOM GET GATEWAY INFO

This Remote Procedure returns information about aDICOM Gateway.

Property | Value
--- | ---
Label | GETINFO
Routine | [MAGDQR05](http://code.osehra.org/dox/Routine_MAGDQR05_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
HOSTNAME | LITERAL | 30 | true | The value of this parameter is a string.This string must be the &quot;hostname&quot; of the computer that isbeing used to operate the DICOM Gateway for which informationis to be returned.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}