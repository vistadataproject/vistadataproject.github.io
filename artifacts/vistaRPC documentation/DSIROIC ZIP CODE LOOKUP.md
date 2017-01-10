---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIROIC ZIP CODE LOOKUP 

 property | value 
--- | --- 
 label | DSIROIC ZIP CODE LOOKUP
 tag | ZIP
 routine | [DSIROIC](http://code.osehra.org/dox/Routine_DSIROIC_source.html)
 return value type | SINGLE VALUE
 description | Looks up location information, city, state, and county based on inputted zip code.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PCODE | LITERAL | 10 | true | PCODE - required - 5 or 9 digit zip code - must be a string | 
| vs:Input_Parameter-8994_02 | ACTDATE | LITERAL | 7 | true | ACTDATE - optional - Fileman date for which the zip code must have beenactive - default is to ignore date sndn return all. | 