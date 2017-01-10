---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV GET EIV REPORT 

 property | value 
--- | --- 
 label | DSIV GET EIV REPORT
 tag | IIV
 routine | [DSIVIC3](http://code.osehra.org/dox/Routine_DSIVIC3_source.html)
 return value type | GLOBAL ARRAY
 description | Returns data from the IIV RESPONSE file (365) based on a buffer ien.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | BUFFER | LITERAL | 30 | true | Insurance Buffer IEN (file 355.33). | 