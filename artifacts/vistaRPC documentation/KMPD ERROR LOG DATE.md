---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; KMPD ERROR LOG DATE 

 property | value 
--- | --- 
 label | KMPD ERROR LOG DATE
 tag | ERRDATE
 routine | [KMPDU3](http://code.osehra.org/dox/Routine_KMPDU3_source.html)
 return value type | ARRAY
 description | Get matching date or list of dates from file #3.075 (ERROR LOG).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PARAM1 | LITERAL | 30 | true | Date in internal fileman format or \*\ for all dates in file #3.075 (ERRORLOG). | 