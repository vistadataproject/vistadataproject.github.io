---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MD TMDOUTPUT 

 property | value 
--- | --- 
 label | MD TMDOUTPUT
 tag | RPC
 routine | [MDRPCOO](http://code.osehra.org/dox/Routine_MDRPCOO_source.html)
 return value type | GLOBAL ARRAY
 description | Manages the output of VistA data to the client via the default HFS device.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| OPTION | LITERAL | 30 | true | Currently set to EXECUTE as the only option. | 
| RTN | LITERAL | 30 | true | Contains the routine to produce the output.  Currently to client producesthis parameter in the form of TAG^ROUTINE(needed parameters) to simplifythe calling process. | 




 ###### Generated on January 11th 2017, 6:39:43 am