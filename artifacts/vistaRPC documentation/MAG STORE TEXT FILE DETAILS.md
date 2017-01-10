---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG STORE TEXT FILE DETAILS 

 property | value 
--- | --- 
 label | MAG STORE TEXT FILE DETAILS
 tag | STOREUID
 routine | [MAGDOD01](http://code.osehra.org/dox/Routine_MAGDOD01_source.html)
 return value type | SINGLE VALUE
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This Remote Procedure updates the information about an image.Specifically, the fields for SERIES UID, SERIES NUMBER andIMAGE NUMBER (sequence within series) may be updated.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IMAGE | LITERAL | 20 | true | The value of this parameter is a pointer to the IMAGE file (#2005).This pointer identifies the image for which information is to beupdated. | 
| vs:Input_Parameter-8994_02 | SERIES | LITERAL | 64 | true | The value of this parameter is a string. This string, if non-empty,is the SERIES UID for the image specified. The format and meaning of a SERIES UID is specified in the DICOMstandard. | 
| vs:Input_Parameter-8994_02 | SNUM | LITERAL | 10 | true | The value of this parameter is either 0 (zero) or a positive integer number.This number identifies the sequence of a series within a study. | 
| vs:Input_Parameter-8994_02 | INUM | LITERAL | 10 | true | The value of this parameter is either 0 (zero) or a positive integer number.This number identifies the sequence of the image within its series. | 
| vs:Input_Parameter-8994_02 | IMGUID | LITERAL | 64 | true | The value of this parameter is a string. This string meets theconstraints of a DICOM Unique Identifier. This identifier uniquely identifies an image. | 
| vs:Input_Parameter-8994_02 | STUID | LITERAL | 64 | true | The value of this parameter is a string. This string meets theconstraints of a DICOM Unique Identifier. This identifier uniquely identifies a study. | 