---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; IBARXM TRANS DATA 

 property | value 
--- | --- 
 label | IBARXM TRANS DATA
 tag | TRANS
 routine | [IBARXMR](http://code.osehra.org/dox/Routine_IBARXMR_source.html)
 return value type | SINGLE VALUE
 description | This remote procedure is used to receive transaction information from aremote facility and reply with an acknowledgement.This RPC call does not send user data to remote side.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IBD | LITERAL |  | true | This is the data sent by the remote treating facility to be filled infile 354.71. | 
| IBICN | LITERAL |  | true | This is the patient's ICN. | 




 ###### Generated on January 11th 2017, 6:39:42 am