---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU CAN CHANGE COSIGNER? 

 property | value 
--- | --- 
 label | TIU CAN CHANGE COSIGNER?
 tag | CANCHCOS
 routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 return value type | SINGLE VALUE
 description | BOOLEAN RPC to evaluate user's privilege to modify the expected cosigner, given the current status of the document, and the user's role with respect to it.


### Method description

 property | value 
--- | --- 
 Method comment | Evaluate/return whether user can change cosigner

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUDA | LITERAL |  | true | This is the IEN of the document in the TIU DOCUMENT FILE (#8925). | 