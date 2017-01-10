---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV FEE BASIS LIST 

 property | value 
--- | --- 
 label | DENTV FEE BASIS LIST
 tag | LIST
 routine | [DENTVFB](http://code.osehra.org/dox/Routine_DENTVFB_source.html)
 return value type | ARRAY
 description | This RPC gets a list of DENTAL FEE BASIS EXTRACT (#228.5) records fora specified patient.  The input is a single value, patient id (DFN).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | INPUT | LITERAL | 30 | true | The input value is a single patient id (DFN). | 