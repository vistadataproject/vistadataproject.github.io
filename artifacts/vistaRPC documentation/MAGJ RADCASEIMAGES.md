---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGJ RADCASEIMAGES 

 property | value 
--- | --- 
 label | MAGJ RADCASEIMAGES
 tag | OPENCASE
 routine | [MAGJEX1](http://code.osehra.org/dox/Routine_MAGJEX1_source.html)
 return value type | GLOBAL ARRAY
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+This procedure is used by the Radiology Imaging Workstation to fetch imagefile information for all the images for a selected case.  If the case'simages are not on magnetic storage, but are on archive storage (e.g.,jukebox), then the procedure initiates a fetch of the image files fromthe archive.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATA | LITERAL | 50 | true | Input value is the pointer to the RAD/NUC MED REPORTS file for the case;this pointer is referred to by the Radiology pkg variable RARPT. | 




 ###### Generated on January 11th 2017, 6:39:43 am