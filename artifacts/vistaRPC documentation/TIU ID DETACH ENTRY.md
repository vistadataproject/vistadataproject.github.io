---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU ID DETACH ENTRY 

 property | value 
--- | --- 
 label | TIU ID DETACH ENTRY
 tag | IDDTCH
 routine | [TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 return value type | SINGLE VALUE
 description | This call will remove an ID Entry from an Interdisciplinary Note.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | TIUDA | LITERAL |  | true | This is the internal entry number of the ID Entry which is to be removedfrom the ID Note. | 