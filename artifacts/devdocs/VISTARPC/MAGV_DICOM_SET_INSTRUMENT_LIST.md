---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGV DICOM SET INSTRUMENT LIST
# MAGV DICOM SET INSTRUMENT LIST

Update DICOM GATEWAY INSTRUMENT DICTIONARY file (#2006.911)

Property | Value
--- | ---
Label | SETINSTR
Routine | [MAGVDGWP](http://code.osehra.org/dox/Routine_MAGVDGWP_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
HOSTNAME | LITERAL |  | true | DICOM Gateway host name
LOCATION | LITERAL |  | true | Identifies the institution where this DICOM Gateway computer resides
MAGDATA | LIST |  | true | Data in DICOM GATEWAY INSTRUMENT DICTIONARY file (#2006.911)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}