---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV UPDATE WORK ITEM 

 property | value 
--- | --- 
 label | MAGV UPDATE WORK ITEM
 tag | UPDITEM
 routine | [MAGVIM01](http://code.osehra.org/dox/Routine_MAGVIM01_source.html)
 return value type | SINGLE VALUE
 description |  +---------------------------------------------------------------+ | Property of the US Government.                                | | No permission to copy or redistribute this software is given. | | Use of unreleased versions of this software requires the user | | to execute a written test agreement with the VistA Imaging    | | Development Office of the Department of Veterans Affairs,     | | telephone (301) 734-0100.                                     | |                                                               | | The Food and Drug Administration classifies this software as  | | a medical device.  As such, it may not be changed in any way. | | Modifications to this software may result in an adulterated   | | medical device under 21CFR820, the use of which is considered | | to be a violation of US Federal Statutes.                     | +---------------------------------------------------------------+ This RPC updates a work item in the MAG WORK ITEM file (#2006.941). 

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ITEMID | LITERAL |  | true | This is the item ID that uniquely identifies the work list item. | 
| vs:Input_Parameter-8994_02 | EXPSTAT | LITERAL |  | true | This is the expected status of the work item.  If the expected statusdoes not match the status of the work item then the item will notbe updated. | 
| vs:Input_Parameter-8994_02 | NEWSTAT | LITERAL |  |  | This is the new status to be filed in the work item. | 
| vs:Input_Parameter-8994_02 | MESSAGE | LITERAL |  |  | This is the message that is associated with the work item. | 
| vs:Input_Parameter-8994_02 | UPDUSR | LITERAL |  |  | This is the user that has updated the work item. | 
| vs:Input_Parameter-8994_02 | UPDAPP | LITERAL |  |  | This is the application/service that has updated the work item. | 