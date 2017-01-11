---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU GET DOCUMENT STATUS 

 property | value 
--- | --- 
 label | TIU GET DOCUMENT STATUS
 tag | GETSTAT
 routine | [TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
 return value type | SINGLE VALUE
 description | This RPC is used to retrieve the Status (8925.6 IEN) of a TIU DOCUMENT.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUIEN | LITERAL |  | true | TIU DOCUMENT IEN (8925) | 