---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ROR LOG GET MESSAGES 

 property | value 
--- | --- 
 label | ROR LOG GET MESSAGES
 tag | MSGLIST
 routine | [RORRP007](http://code.osehra.org/dox/Routine_RORRP007_source.html)
 return value type | GLOBAL ARRAY
 description | The ROR LOG GET MESSAGES remote procedure returns a list of messages fromthe log defined by the parameter.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| LOGIEN | LITERAL |  | true | The LOGIEN parameter defines the log. It should contain a valid IEN of thelog record in the ROR LOG file. | 




 ###### Generated on January 11th 2017, 6:39:43 am