---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PSB SERVER CLOCK VARIANCE 

 property | value 
--- | --- 
 label | PSB SERVER CLOCK VARIANCE
 tag | CLOCK
 routine | [PSBUTL](http://code.osehra.org/dox/Routine_PSBUTL_source.html)
 return value type | ARRAY
 description | Client date/time in external FileMan format. Returns the variance from theserver to the client in minutes.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PSBX | LITERAL |  | true | Client date/time in external fileman format. | 