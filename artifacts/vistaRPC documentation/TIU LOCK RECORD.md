---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU LOCK RECORD 

 property | value 
--- | --- 
 label | TIU LOCK RECORD
 tag | LOCK
 routine | [TIUSRVP](http://code.osehra.org/dox/Routine_TIUSRVP_source.html)
 return value type | SINGLE VALUE
 description | This RPC will issue an incremental LOCK on the record identified by theTIUDA parameter, returning an integer truth value indicating successor failure in obtaining the LOCK.


### Method description

 property | value 
--- | --- 
 Method comment | Bid for lock on a TIU Document record

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUDA | LITERAL |  | true | This is the IEN of the record in the TIU DOCUMENT FILE (#8925). | 




 ###### Generated on January 11th 2017, 6:39:42 am