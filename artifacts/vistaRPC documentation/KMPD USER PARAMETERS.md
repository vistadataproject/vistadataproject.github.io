---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; KMPD USER PARAMETERS 

 property | value 
--- | --- 
 label | KMPD USER PARAMETERS
 tag | USRPARAM
 routine | [KMPDU6](http://code.osehra.org/dox/Routine_KMPDU6_source.html)
 return value type | ARRAY
 description | Set/Get gui option info.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DUZ | LITERAL | 35 | true | User's DUZ. | 
| TYPE | LITERAL | 5 | true | Type of call: 1 - get option info              2 - set option info | 
| OPTION | LIST | 256 | true |  | 