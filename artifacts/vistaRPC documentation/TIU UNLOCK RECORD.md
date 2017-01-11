---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU UNLOCK RECORD 

 property | value 
--- | --- 
 label | TIU UNLOCK RECORD
 tag | UNLOCK
 routine | [TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
 return value type | SINGLE VALUE
 description | This RPC will decrement the lock on a given TIU Document Record, identifiedby the TIUDA input parameter. The return value will always be 0.


### Method description

 property | value 
--- | --- 
 Method comment | Decrement Lock on a TIU Document record

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUDA | LITERAL |  | true | This is the IEN of the record in the TIU DOCUMENT FILE (#8925). | 




Generated on January 11th 2017, 6:34:23 am