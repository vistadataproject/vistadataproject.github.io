---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XHD REMOVE PARAMETER CATEGORY 

 property | value 
--- | --- 
 label | XHD REMOVE PARAMETER CATEGORY
 tag | REMOVE
 routine | [XHDPCAT](http://code.osehra.org/dox/Routine_XHDPCAT_source.html)
 return value type | SINGLE VALUE
 description | This call removes parameter categories from their parents (i.e., \prunes\ the branch of which the the category is the root). It does NOT delete the Category or its descendents. Use the ORR DELETE PARAMETER CATEGORY to delete a given categor and all its descendents.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PCAT | LITERAL |  | true | This is the record number (i.e., IEN) of the parameter category. | 
| vs:Input_Parameter-8994_02 | PARENT | LITERAL |  | true | This is the record number (i.e., IEN) of the parameter category's parent. | 