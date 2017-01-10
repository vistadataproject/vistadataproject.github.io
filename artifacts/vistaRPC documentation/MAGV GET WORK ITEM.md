---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV GET WORK ITEM 

 property | value 
--- | --- 
 label | MAGV GET WORK ITEM
 tag | GETITEM
 routine | [MAGVIM01](http://code.osehra.org/dox/Routine_MAGVIM01_source.html)
 return value type | ARRAY
 description | This RPC returns all of the data elements for a single entry in theMAG WORK ITEM file (#2006.941).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ITEMID | LITERAL | 12 |  | This is the item ID used to uniquely identify a work item. | 
| vs:Input_Parameter-8994_02 | EXPSTAT | LITERAL |  |  | This is the expected status of the work item.  If the work item doesnot have the expected status the work item elements will not bereturned and the work item status will not be updated. | 
| vs:Input_Parameter-8994_02 | NEWSTAT | LITERAL |  |  | This is the new status to be filed in the work item. | 
| vs:Input_Parameter-8994_02 | UPDUSR | LITERAL |  |  | This is the user that has updated the work item entry. | 
| vs:Input_Parameter-8994_02 | UPDAPP | LITERAL |  |  | This is the application/service that has updated the work item entry. | 