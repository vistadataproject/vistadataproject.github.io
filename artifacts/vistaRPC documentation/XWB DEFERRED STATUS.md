---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XWB DEFERRED STATUS 

 property | value 
--- | --- 
 label | XWB DEFERRED STATUS
 tag | RPCCHK
 routine | [XWBDRPC](http://code.osehra.org/dox/Routine_XWBDRPC_source.html)
 return value type | ARRAY
 description | This RPC will return the status of a deferred RPC.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | HANDLE | LITERAL | 30 | true | The handle returned from the XWB DEFERRED RPC. | 