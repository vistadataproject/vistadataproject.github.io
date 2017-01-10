---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBAB TEMPLATE DEFINITION 

 property | value 
--- | --- 
 label | DVBAB TEMPLATE DEFINITION
 tag | DEFINE
 routine | [DVBABFRM](http://code.osehra.org/dox/Routine_DVBABFRM_source.html)
 return value type | GLOBAL ARRAY
 description | C&P Worksheet Templates are made of 3 files:  a form definition, a code definition, and a script definition. Set DVBIEN to the internal entry number of the form Set DVBTYPE to the definition you want:         1= Form, 2=Script, 3=Report

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DVBIEN | LITERAL |  | true |  | 
| vs:Input_Parameter-8994_02 | DVBTYPE | LITERAL |  | true |  | 