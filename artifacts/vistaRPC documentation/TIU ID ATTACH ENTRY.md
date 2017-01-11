---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU ID ATTACH ENTRY 

 property | value 
--- | --- 
 label | TIU ID ATTACH ENTRY
 tag | IDATTCH
 routine | [TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)
 return value type | SINGLE VALUE
 description | This RPC will attach a a document as an Interdisciplinary (ID) entry to anID Parent document.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUDA | LITERAL |  | true | This is the IEN of the Entry which is to be attached as the ID Child. | 
| TIUDAD | LITERAL |  | true | This is the internal entry number of the TIU Document which is to be theID Parent to which the ID Entry is attached. | 