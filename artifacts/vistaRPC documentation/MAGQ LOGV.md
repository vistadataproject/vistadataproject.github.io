---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGQ LOGV 

 property | value 
--- | --- 
 label | MAGQ LOGV
 tag | ELOGRV
 routine | [MAGQBPG1](http://code.osehra.org/dox/Routine_MAGQBPG1_source.html)
 return value type | ARRAY
 description | This provides a method of capturing errors logged during the BP Verifierprocess.  This function provides a list which can be examined at a laterdate and will be rolled into verifier log file on the BP Server or networklog file share.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | NULL |  |  | true | No input parameter is defined. | 
| vs:Input_Parameter-8994_02 | LIMIT | LITERAL | 5 | true | This value is used to control the array size. | 