---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGQ ELOGR 

 property | value 
--- | --- 
 label | MAGQ ELOGR
 tag | ELOGR
 routine | [MAGQBPRG](http://code.osehra.org/dox/Routine_MAGQBPRG_source.html)
 return value type | ARRAY
 description | This provides a method of capturing errors logged during the purgeprocess.  This function provides a list which can be examined at a laterdate and will be rolled into the purge log file on the BP Server which performed the purge.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| NULL |  |  | true | No input parameter is defined. | 
| LIMIT | LITERAL | 5 | true | This value is used to control the array size. | 