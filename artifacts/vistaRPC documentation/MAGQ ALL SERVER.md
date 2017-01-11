---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGQ ALL SERVER 

 property | value 
--- | --- 
 label | MAGQ ALL SERVER
 tag | ALLSERV
 routine | [MAGQBUT1](http://code.osehra.org/dox/Routine_MAGQBUT1_source.html)
 return value type | ARRAY
 description | Returns a list of all online file servers at a site.This network location file list requires the following from eachcandidate:ONLINEtype: MAGpath does not contain: \:\NON-ROUTER 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| null |  |  |  | No input parameter required. | 
| GROUP | LITERAL | 16 | true | This value should be either \GROUP\ or \ALL\ to differentiatebetween a Current Write Group Update and an All share update. | 