---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG DICOM RADIOLOGY PROCEDURES
# MAG DICOM RADIOLOGY PROCEDURES

This RPC returns a list of Radiology Procedures for 'no-credit' Imaginglocations within a given division.If the division does not have any 'no-credit' Imaging locations defined,the results will return an error message indicating the problem.

Property | Value
--- | ---
Label | PROC
Routine | [MAGDRPCA](http://code.osehra.org/dox/Routine_MAGDRPCA_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DIV | LITERAL | 30 | true | This is the division used during the lookup process.
FILTER | LITERAL | 30 | true | If this parameter is set to &quot;1&quot; procedure types of &quot;B&quot;road and &quot;P&quot;arent will be filtered from the return array.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}