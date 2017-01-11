---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGVC WI SUBMIT NEW 

 property | value 
--- | --- 
 label | MAGVC WI SUBMIT NEW
 tag | ACTCRE8
 routine | [MAGVCWIA](http://code.osehra.org/dox/Routine_MAGVCWIA_source.html)
 return value type | ARRAY
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC creates a new MAG WORK ITEM file (#2006.941) entry for the StorageCommitWORKLIST type, optionally querying the item's deep archive status first,and echoes back the submitted item as a response (MAG*3.0*79).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MSGTAGS | LIST |  |  | This is an array of tag names and values describing the work item andits child objects. | 
| STAT | LITERAL |  | true | The STAT flag, set to 1, initiates a query before returning data. | 




 ###### Generated on January 11th 2017, 6:39:43 am