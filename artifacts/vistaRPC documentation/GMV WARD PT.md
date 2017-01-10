---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; GMV WARD PT 

 property | value 
--- | --- 
 label | GMV WARD PT
 tag | WARDPT
 routine | [GMVGETD](http://code.osehra.org/dox/Routine_GMVGETD_source.html)
 return value type | GLOBAL ARRAY
 description | This procedure lists patients registered on a particular MAS ward.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | GMRWARD | LITERAL | 30 | true | GMRWARD contains the name of ward from Ward Location file (#42). | 