---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGQ JBS 

 property | value 
--- | --- 
 label | MAGQ JBS
 tag | ENTRY
 routine | [MAGQBPG1](http://code.osehra.org/dox/Routine_MAGQBPG1_source.html)
 return value type | ARRAY
 description | This list process returns a list of jukebox shares for the BP Verifier.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | WS Name | LITERAL | 3 | true | This is the tree letter BP Workstation name. | 
| vs:Input_Parameter-8994_02 | jbscan | LITERAL | 5 | true | 'jbscan' literal. | 