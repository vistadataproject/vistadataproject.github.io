---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG DICOM GET RAD INFO BY ACN<br/>
# MAG DICOM GET RAD INFO BY ACN

This RPC takes the Accession Number and returns the first radiology study that matches it.  This RPC uses $$ACCFIND^RAAPI() to get this information.

## Properties

Property | Value
--- | ---
Label | ACNUMB
MUMPS Implementation | [MAGDRPCA](http://code.osehra.org/dox/Routine_MAGDRPCA_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ACNUMB | LITERAL | 30 | true | The accession number in either a &#x27;sss-mmddyy-xxxxx&#x27; or   &#x27;mmddyy-xxxxx&#x27; format



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}