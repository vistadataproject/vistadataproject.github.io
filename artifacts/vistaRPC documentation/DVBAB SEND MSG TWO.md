---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBAB SEND MSG TWO 

 property | value 
--- | --- 
 label | DVBAB SEND MSG TWO
 tag | MSG2
 routine | [DVBAB1A](http://code.osehra.org/dox/Routine_DVBAB1A_source.html)
 return value type | SINGLE VALUE
 description | THIS RPC IS THE SECOND FOR THE CAPRI MSG 2507 EXAMTHIS ONE PRODUCES A MESSAGE FOR EACH EXAM THAT IS COMPLETED

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DUZ | LITERAL |  |  | PERSON FILE DFN | 
| RIEN | LITERAL |  |  | 2507 REQUEST IEN #396.3 | 
| ELIST | LIST |  |  | 2507 EXAM LIST #396.4 | 