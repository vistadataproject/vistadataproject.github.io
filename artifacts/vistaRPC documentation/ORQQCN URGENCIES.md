---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQCN URGENCIES 

 property | value 
--- | --- 
 label | ORQQCN URGENCIES
 tag | URG
 routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 return value type | ARRAY
 description | Returns a list of applicable urgencies from PROTOCOL file 101,given a ConsultIEN and type.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | Consult ID | LITERAL | 16 | true | Internal file number of consult in file 123. | 
| vs:Input_Parameter-8994_02 | Request type | LITERAL | 30 | true | Consult or procedure.  Pointer to PROTOCOL file 101.  Value iseither 'GMRCOR CONSULT' or 'GMRCOR REQUEST'. | 