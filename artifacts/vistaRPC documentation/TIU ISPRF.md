---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; TIU ISPRF 

 property | value 
--- | --- 
 label | TIU ISPRF
 tag | ISPRFTTL
 routine | [TIUPRF2](http://code.osehra.org/dox/Routine_TIUPRF2_source.html)
 return value type | SINGLE VALUE
 description | This RPC is to check to see if the passed in TIU DOCUMENT TITLE IEN is a Patient Record Flag TITLE.


### Method description

 property | value 
--- | --- 
 Method comment | RPC Takes as input 8925.1 IEN
 Leading comment lines | and checks if it is a PRF title,Cf ISPFTTL^TIUPRFL. which is a FUNCTION

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TIUTTL | LITERAL |  | true | TIU DOCUMENT TITLE IEN | 




Generated on January 11th 2017, 6:34:23 am