---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGV DICOM SET MODALITY LIST
# MAGV DICOM SET MODALITY LIST

Update DICOM GATEWAY MODALITY DICTIONARY file (#2006.912)from MODALITY TYPE DICTIONARY FILE (#2006.582)

Property | Value
--- | ---
Label | SETMODAL
Routine | [MAGVDGWP](http://code.osehra.org/dox/Routine_MAGVDGWP_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
HOSTNAME | LITERAL |  | true | DICOM Gateway host name
LOCATION | LITERAL |  | true | Identifies the institution where this DICOM Gateway computer resides
MAGDATA | LIST |  | true | Data in DICOM GATEWAY MODALITY DICTIONARY file (#2006.912)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}