---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG DICOM GET RAD INFO BY ACN
# MAG DICOM GET RAD INFO BY ACN

This RPC takes the Accession Number and returns the first radiology study that matches it.  This RPC uses $$ACCFIND^RAAPI() to get this information.

Property | Value
--- | ---
Label | ACNUMB
Routine | [MAGDRPCA](http://code.osehra.org/dox/Routine_MAGDRPCA_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ACNUMB | LITERAL | 30 | true | The accession number in either a &#x27;sss-mmddyy-xxxxx&#x27; or   &#x27;mmddyy-xxxxx&#x27; format



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}