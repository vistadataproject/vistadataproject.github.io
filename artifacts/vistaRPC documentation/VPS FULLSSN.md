---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VPS FULLSSN 

 property | value 
--- | --- 
 label | VPS FULLSSN
 tag | FULLSSN
 routine | [VPSRPC5](http://code.osehra.org/dox/Routine_VPSRPC5_source.html)
 return value type | ARRAY
 description | Returns a list of patients with SSNs that match the value stored in ID.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | SSN | LITERAL | 10 | true | Patient's 9-digit SSN value. | 