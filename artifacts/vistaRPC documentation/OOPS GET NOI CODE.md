---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS GET NOI CODE 

 property | value 
--- | --- 
 label | OOPS GET NOI CODE
 tag | GETNOI
 routine | [OOPSGUI8](http://code.osehra.org/dox/Routine_OOPSGUI8_source.html)
 return value type | ARRAY
 description | This broker call returns the listing of NOI codes.  If the claim is a CA1 thenonly codes begining with T are returned, if the claim is a CA2 only codes thatdo not begin with a T are returned.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| OPT | LITERAL | 5 | true | This parameter will be either CA1 or CA2 to indicate which type of claim isrequesting the NOI codes. | 