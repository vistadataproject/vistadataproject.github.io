---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU ID CAN RECEIVE 

 property | value 
--- | --- 
 label | TIU ID CAN RECEIVE
 tag | CANRCV
 routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 return value type | SINGLE VALUE
 description | This BOOLEAN RPC evaluates the question of whether a particular documentmay receive an entry as an Interdisciplinary Parent Note (i.e., can thisdocument be an ID Parent?).


### Method description

 property | value 
--- | --- 
 Method comment | Can this document receive an ID Child?

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUDA | LITERAL |  | true | This is the IEN of the prospective ID Parent document in the TIU Documentfile. | 