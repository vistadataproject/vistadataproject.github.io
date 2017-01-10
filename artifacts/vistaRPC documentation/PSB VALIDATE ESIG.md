---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PSB VALIDATE ESIG 

 property | value 
--- | --- 
 label | PSB VALIDATE ESIG
 tag | ESIG
 routine | [PSBRPC](http://code.osehra.org/dox/Routine_PSBRPC_source.html)
 return value type | ARRAY
 description | Validate the data in PSBESIG against the user currently signed on (DUZ)

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PSBESIG | LITERAL |  | true | Data typed in by the user, which validates the E-SIG. | 