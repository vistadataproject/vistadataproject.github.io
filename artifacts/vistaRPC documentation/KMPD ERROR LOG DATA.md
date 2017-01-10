---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; KMPD ERROR LOG DATA 

 property | value 
--- | --- 
 label | KMPD ERROR LOG DATA
 tag | ERRDATA
 routine | [KMPDU3](http://code.osehra.org/dox/Routine_KMPDU3_source.html)
 return value type | GLOBAL ARRAY
 description | Get data from file #3.075 (ERROR LOG).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PARAM1 | LITERAL | 60 | true | Ien in format \MultipleIen,Ien\ for file #3.075 (ERROR LOG). | 
| vs:Input_Parameter-8994_02 | PARAM2 | LITERAL | 60 | true | Temporary global storage.  This must be either ^TMP or ^UTILITY. | 