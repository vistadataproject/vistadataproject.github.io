---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWDX SENDP 

 property | value 
--- | --- 
 label | ORWDX SENDP
 tag | SENDP
 routine | [ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
 return value type | ARRAY
 description | Same as ORWDX SEND, but allows print devices as parameter.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | orwdev | LITERAL | 32 |  | chart device^label device^requisition device^work copy device All are pointers to the DEVICE file. | 