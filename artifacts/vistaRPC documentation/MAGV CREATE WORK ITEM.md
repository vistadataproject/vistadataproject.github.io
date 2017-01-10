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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | TYPE | LITERAL |  |  | This is the type of WORK ITEM created (i.e. DICOM Correct). | 
| vs:Input_Parameter-8994_02 | SUBTYPE | LITERAL |  |  | This is the subtype of a work item. | 
| vs:Input_Parameter-8994_02 | STATUS | LITERAL |  |  | This is the initial status given to a work item. | 
| vs:Input_Parameter-8994_02 | PLACEID | LITERAL |  |  | This is the place ID number of a work item. | 
| vs:Input_Parameter-8994_02 | PRIORITY | LITERAL |  |  | This is the numeric priority given to a work item. | 
| vs:Input_Parameter-8994_02 | MSGTAGS | LIST |  |  | This is an array of tag names and values assigned to a work item. Tagnames and values may be used to look up a work item. | 
| vs:Input_Parameter-8994_02 | CRTUSER | LITERAL |  |  | This is the user that created the work item. | 
| vs:Input_Parameter-8994_02 | CRTAPP | LITERAL |  |  | This is the application that created the work item. | 