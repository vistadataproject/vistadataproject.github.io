---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM ROUTE PURGE DONE 

 property | value 
--- | --- 
 label | MAG DICOM ROUTE PURGE DONE
 tag | PURGDONE
 routine | [MAGDRPC6](http://code.osehra.org/dox/Routine_MAGDRPC6_source.html)
 return value type | SINGLE VALUE
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ Periodic maintenance on the data in the Transmission Queue involves removal of entries that have a state of \SENT\ after the image files would have been purged from their temporary destinations. In order to perform this maintenance, the user of the DICOM Gateway would invoke a menu option that calls this RPC. This RPC will remove all entries in the Transmission Queue that were created for the specified LOCATION and have been in a state of \SENT\ or \FAILED\ for more days than specified.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DAYS | LITERAL | 10 | true | The value of this parameter is an integer number.This value represents the number of days for which informationwill be retained. When this parameter is omitted, or when its value is less than 1,the retention periods for the destinations of the individual image filesin question will be used as default values. | 
| LOCATION | LITERAL | 30 | true | The value of this parameter is a pointer to ^DIC(4).This pointer identifies the location at which images were acquired. | 




Generated on January 11th 2017, 6:34:23 am