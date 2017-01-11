---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MPIF ACK CHECK 

 property | value 
--- | --- 
 label | MPIF ACK CHECK
 tag | EN
 routine | [MPIFACHK](http://code.osehra.org/dox/Routine_MPIFACHK_source.html)
 return value type | SINGLE VALUE
 description | This RPC will check to see if there are any messages on the sites before date BEFORE that haven't received the application level ack back.  If so, regenerate that message to the MPI.   If a message is generated 1 will be returned, otherwise 0.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| BEFORE | LITERAL | 7 | true | The FM date that the message should be sent BEFORE. | 




Generated on January 11th 2017, 6:34:23 am