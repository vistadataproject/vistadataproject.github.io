---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; KMPD FILE INQUIRY 

 property | value 
--- | --- 
 label | KMPD FILE INQUIRY
 tag | FILEINQ
 routine | [KMPDU5](http://code.osehra.org/dox/Routine_KMPDU5_source.html)
 return value type | GLOBAL ARRAY
 description | Return all data in file for specific entry.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PARAM1 | LITERAL | 60 | true | File number. | 
| vs:Input_Parameter-8994_02 | PARAM2 | LITERAL | 60 | true | IEN for file in PARAM1. | 
| vs:Input_Parameter-8994_02 | PARAM3 | LITERAL | 245 | true | Array for temporary data storage.  This should be a global array, and mustbe either ^TMP or ^UTILITY. | 