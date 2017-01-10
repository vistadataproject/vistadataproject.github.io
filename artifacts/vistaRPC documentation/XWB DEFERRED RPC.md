---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XWB DEFERRED RPC 

 property | value 
--- | --- 
 label | XWB DEFERRED RPC
 tag | EN1
 routine | [XWBDRPC](http://code.osehra.org/dox/Routine_XWBDRPC_source.html)
 return value type | ARRAY
 description | This is the RPC that is called to request that a RPC be run throughtaskman in the background. The first parameter is the name of the RPC to be run. The next 1-10 parameters are the ones for the RPC.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | RPC | LITERAL | 30 | true | This parameter is the name of the RPC to be run in the background.  Thisfirst input parameter may include an optional version information aboutthe RPC, making the syntax like this: RPCname^RPCversion.  The optionalversion number will be placed in XWBAPVER when the RPC runs in thebackground. | 