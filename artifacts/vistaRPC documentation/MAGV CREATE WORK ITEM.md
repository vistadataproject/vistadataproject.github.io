---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV CREATE WORK ITEM 

 property | value 
--- | --- 
 label | MAGV CREATE WORK ITEM
 tag | CRTITEM
 routine | [MAGVIM01](http://code.osehra.org/dox/Routine_MAGVIM01_source.html)
 return value type | SINGLE VALUE
 description | This RPC creates work item entries in the MAG WORK ITEM file (#2006.941).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TYPE | LITERAL |  |  | This is the type of WORK ITEM created (i.e. DICOM Correct). | 
| SUBTYPE | LITERAL |  |  | This is the subtype of a work item. | 
| STATUS | LITERAL |  |  | This is the initial status given to a work item. | 
| PLACEID | LITERAL |  |  | This is the place ID number of a work item. | 
| PRIORITY | LITERAL |  |  | This is the numeric priority given to a work item. | 
| MSGTAGS | LIST |  |  | This is an array of tag names and values assigned to a work item. Tagnames and values may be used to look up a work item. | 
| CRTUSER | LITERAL |  |  | This is the user that created the work item. | 
| CRTAPP | LITERAL |  |  | This is the application that created the work item. | 




 ###### Generated on January 11th 2017, 6:39:43 am