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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ITEMID | LITERAL | 12 |  | This is the item ID used to uniquely identify a work item. | 
| EXPSTAT | LITERAL |  |  | This is the expected status of the work item.  If the work item doesnot have the expected status the work item elements will not bereturned and the work item status will not be updated. | 
| NEWSTAT | LITERAL |  |  | This is the new status to be filed in the work item. | 
| UPDUSR | LITERAL |  |  | This is the user that has updated the work item entry. | 
| UPDAPP | LITERAL |  |  | This is the application/service that has updated the work item entry. | 




 ###### Generated on January 11th 2017, 6:39:43 am