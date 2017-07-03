---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGJ RADCASEIMAGES
# MAGJ RADCASEIMAGES

 +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+This procedure is used by the Radiology Imaging Workstation to fetch imagefile information for all the images for a selected case.  If the case'simages are not on magnetic storage, but are on archive storage (e.g.,jukebox), then the procedure initiates a fetch of the image files fromthe archive.

Property | Value
--- | ---
Label | OPENCASE
Routine | [MAGJEX1](http://code.osehra.org/dox/Routine_MAGJEX1_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 50 | true | Input value is the pointer to the RAD/NUC MED REPORTS file for the case;this pointer is referred to by the Radiology pkg variable RARPT.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}