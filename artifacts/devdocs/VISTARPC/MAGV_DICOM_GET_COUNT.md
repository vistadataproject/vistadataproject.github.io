---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGV DICOM GET COUNT
# MAGV DICOM GET COUNT

This RPC returns the count of entries in the DICOM FAILED IMAGES(#2006.575) file with machine IDs and service types provided to theRPC.

Property | Value
--- | ---
Label | DCRCTCNT
Routine | [MAGVRS51](http://code.osehra.org/dox/Routine_MAGVRS51_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MACHID | LITERAL | 24 |  | The machine ID to be matched to the machine ID in the DICOM FAILEDIMAGES (#2006.575) file.
SERVTYPE | LITERAL | 20 |  | The service type to be matched to the service type in the DICOMFAILED IMAGES (#2006.575) file.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}