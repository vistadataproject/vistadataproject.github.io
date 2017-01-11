---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM ROUTE NEXT FILE 

 property | value 
--- | --- 
 label | MAG DICOM ROUTE NEXT FILE
 tag | XMIT
 routine | [MAGDRPC5](http://code.osehra.org/dox/Routine_MAGDRPC5_source.html)
 return value type | ARRAY
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ The Routing Transmitter will continuously ask the VistA systemfor the next file to transmit. This RPC will be called to obtainthe name of the next file to be transmitted. This RPC returns information about the next image file to betransmitted by a certain Routing Transmitter. The next file to be transmitted is either the next file forthe current destination, or the next file with the highestpriority in any of the queues for the destinations that arebeing served by the current transmitter. If neither of the parameters DEST and PRIOR have a non-emptyvalue, information about the first file (if any) to be transmittedwill be returned.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| LOCATION | LITERAL | 30 | true | The value of this parameter is a pointer to ^DIC(4).This pointer identifies the location at which images were acquired. | 
| DEST | LITERAL | 30 | true | The value of this parameter is a pointer to either ^MAG(2005.2)or ^MAGDICOM(2006.585).This pointer identifies the destination to which the imagesare to be transmitted. | 
| PRIOR | LITERAL | 30 | true | The value of this parameter is an integer number (> 0).This number establishes the priority of the new entry in its queue. | 
| MECH | LITERAL | 10 | true | The value of this parameter is an integer value (1 or 2).This number defines the mechanism that will be used to transmitthe images:   1 = standard copy   2 = DICOM copy | 
| DESTS | LIST |  | true | This parameter is an array containing the list of destinationsthat is being served by the current transmitter.The values in this array each are string with two pieces of data,separated by a caret (\^\). The first piece describes the transmission mechanism:  1 = regular copy  2 = DICOM copy The second piece is a pointer. When the first piece is equalto 1, this pointer points to table # 2005.2 (Network Location);when the first piece is equal to 2, this pointer points totable # 2006.585 (User Application). | 




 ###### Generated on January 11th 2017, 6:39:43 am