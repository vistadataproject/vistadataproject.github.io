---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VAFC REMOTE PDAT 

 property | value 
--- | --- 
 label | VAFC REMOTE PDAT
 tag | PDAT
 routine | [VAFCRPC](http://code.osehra.org/dox/Routine_VAFCRPC_source.html)
 return value type | ARRAY
 description | This Remote Procedure Call will return the text Patient MPI/PD Data Inquiry report to a remote site.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ICN | LITERAL | 16 | true | This should be the ICN without the 'V' or the checksum. | 
| vs:Input_Parameter-8994_02 | SSN | LITERAL | 9 | true |  | 