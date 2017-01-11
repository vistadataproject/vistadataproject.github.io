---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG UTIL DT2IEN 

 property | value 
--- | --- 
 label | MAG UTIL DT2IEN
 tag | DTRANGE
 routine | [MAGSHEC](http://code.osehra.org/dox/Routine_MAGSHEC_source.html)
 return value type | ARRAY
 description | This Remote Procedure uses a date range to find an IEN in the IMAGE File (#2005)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DATE | LITERAL | 36 | true | DATE for IMAGE file (#2005) IEN search by Image Saved Date | 
| LIMIT | LITERAL |  |  | LIMIT - 0: LIMIT ONE YEAR RANGE        1: NONE | 




 Generated on January 11th 2017, 7:15:04 am