---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; EC CLASHELP 

 property | value 
--- | --- 
 label | EC CLASHELP
 tag | CLHLP
 routine | [ECUERPC1](http://code.osehra.org/dox/Routine_ECUERPC1_source.html)
 return value type | GLOBAL ARRAY
 description | RPC Broker entry point for classification help.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ECARY | LITERAL |  | true | Input key ECARY consist of the following pieces:-ECDFN  - Patient DFN from file (#2)ECKY   - Key to provide help on.  Example ECKY='SC' provides help on service         connection. | 