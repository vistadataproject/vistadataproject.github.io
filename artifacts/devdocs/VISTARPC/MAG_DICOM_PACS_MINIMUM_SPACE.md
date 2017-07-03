---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAG DICOM PACS MINIMUM SPACE
# MAG DICOM PACS MINIMUM SPACE

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ On occasion the software on the DICOM Gateway needs to knowthe minimum percentage of disk space that needs to remain onthe Magnetic Disk Storage that is used for files that arecopied to a PACS.

Property | Value
--- | ---
Label | MINSPACE
Routine | [MAGDRPC1](http://code.osehra.org/dox/Routine_MAGDRPC1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
D0 | LITERAL | 30 | true | The value of this parameter is a pointer to the ImagingSite Parameter Table (#2006.1). For non-consolidated sites, this value is always equal to 1 . For consolidated sites, this pointer identifies the &quot;place&quot;for which information is to be retrieved.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}