---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU WHICH SIGNATURE ACTION 

 property | value 
--- | --- 
 label | TIU WHICH SIGNATURE ACTION
 tag | WHATACT
 routine | [TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)
 return value type | SINGLE VALUE
 description | This RPC infers whether the user is trying to sign or cosign the docuementin question, and indicates which ASU ACTION the GUI should pass to the TIUAUTHORIZATION RPC.


### Method description

 property | value 
--- | --- 
 Method comment | Evaluate/return whether signature or cosignature

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUDA | LITERAL |  | true | This is the record number of the TIU Document in file 8925. | 




 ###### Generated on January 11th 2017, 6:39:42 am