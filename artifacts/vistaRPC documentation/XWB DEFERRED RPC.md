---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; XWB DEFERRED RPC 

 property | value 
--- | --- 
 label | {::nomarkdown}XWB DEFERRED RPC{:/}
 tag | {::nomarkdown}EN1{:/}
 routine | [XWBDRPC](http://code.osehra.org/dox/Routine_XWBDRPC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This is the RPC that is called to request that a RPC be run throughtaskman in the background. The first parameter is the name of the RPC to be run. The next 1-10 parameters are the ones for the RPC.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}RPC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter is the name of the RPC to be run in the background.  Thisfirst input parameter may include an optional version information aboutthe RPC, making the syntax like this: RPCname^RPCversion.  The optionalversion number will be placed in XWBAPVER when the RPC runs in thebackground.{:/} | 




 Generated on January 13th 2017, 6:24:32 am