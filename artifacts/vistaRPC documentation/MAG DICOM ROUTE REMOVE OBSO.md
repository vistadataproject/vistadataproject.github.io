---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM ROUTE REMOVE OBSO 

 property | value 
--- | --- 
 label | MAG DICOM ROUTE REMOVE OBSO
 tag | REMOBSO
 routine | [MAGDRPC6](http://code.osehra.org/dox/Routine_MAGDRPC6_source.html)
 return value type | SINGLE VALUE
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ When the connection between a transmitting and receiving site has been down for an extended period of time, the user of the DICOM Gateway may decide to forego transmission of any images that would already have been purged at the destination if it would have been possible to transmit them in the first place. In order to perform this maintenance, the user of the DICOM Gateway would invoke a menu option that calls this RPC. This RPC will remove any entries from the Transmission Queue that were created for the specified location and that have a status of either \WAITING\, \SENDING\ or \FAILED\ and that are older than the specified date.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| UPTO | LITERAL | 20 | true | The value of this parameter is a (FileMan-formatted) date/time value.This value represents the date before which all entries are to bepurged from the Transmission Queue. | 
| LOCATION | LITERAL | 30 | true | The value of this parameter is a pointer to ^DIC(4).This pointer identifies the location at which images were acquired. | 




 ###### Generated on January 11th 2017, 6:39:43 am