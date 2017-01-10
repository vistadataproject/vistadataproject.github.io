---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV DELETE WORK ITEM 

 property | value 
--- | --- 
 label | MAGV DELETE WORK ITEM
 tag | DELWITEM
 routine | [MAGVIM01](http://code.osehra.org/dox/Routine_MAGVIM01_source.html)
 return value type | SINGLE VALUE
 description | This RPC deletes a single entry in the MAG WORK ITEM file (#2006.941).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ITEMID | LITERAL |  |  | This is the item ID that uniquely identifies the work item to be deleted. | 