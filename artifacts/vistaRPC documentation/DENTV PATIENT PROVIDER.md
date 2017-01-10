---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV PATIENT PROVIDER 

 property | value 
--- | --- 
 label | DENTV PATIENT PROVIDER
 tag | PP
 routine | [DENTVUTL](http://code.osehra.org/dox/Routine_DENTVUTL_source.html)
 return value type | SINGLE VALUE
 description | Sets and kills the ^XTMP(\DENTVPT\,DFN,DUZ) global to keep track ofwhich provider(s) are accessing which patients.  Users are warnedif another provider is accessing the same patient.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 30 | true | Contains the patient DFN | 
| vs:Input_Parameter-8994_02 | FLAG | LITERAL | 1 | true | 1=SET (set the index) 2=KILL (kill off current pt/prov index) | 