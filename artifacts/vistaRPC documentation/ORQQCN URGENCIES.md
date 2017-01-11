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


### Method description

 property | value 
--- | --- 
 Method comment | new urgency from 101.42

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| Consult ID | LITERAL | 16 | true | Internal file number of consult in file 123. | 
| Request type | LITERAL | 30 | true | Consult or procedure.  Pointer to PROTOCOL file 101.  Value iseither 'GMRCOR CONSULT' or 'GMRCOR REQUEST'. | 




 Generated on January 11th 2017, 7:15:04 am