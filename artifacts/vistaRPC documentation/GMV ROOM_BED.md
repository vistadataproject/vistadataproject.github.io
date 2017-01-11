---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV ROOM_BED 

 property | value 
--- | --- 
 label | GMV ROOM_BED
 tag | ROOMBED
 routine | [GMVGETD](http://code.osehra.org/dox/Routine_GMVGETD_source.html)
 return value type | GLOBAL ARRAY
 description | This procedure extracts room/bed information from Room-Bed file (#405.4)for a given MAS ward.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| GMRWARD | LITERAL | 30 | true | GMRWARD is a MAS ward name from the Ward Location file (#42). | 