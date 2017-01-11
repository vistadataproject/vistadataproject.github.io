---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XWB REMOTE STATUS CHECK 

 property | value 
--- | --- 
 label | XWB REMOTE STATUS CHECK
 tag | RPCCHK
 routine | [XWB2HL7](http://code.osehra.org/dox/Routine_XWB2HL7_source.html)
 return value type | ARRAY
 description | This RPC will return the status of a remote RPC.


### Method description

 property | value 
--- | --- 
 Method comment | RPC call to check a handle status

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| HANDLE | LITERAL | 30 | true | This is the handle used to check the status of the remote RPC. | 