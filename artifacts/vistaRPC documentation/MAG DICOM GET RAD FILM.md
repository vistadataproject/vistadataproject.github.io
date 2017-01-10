---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM GET RAD FILM 

 property | value 
--- | --- 
 label | MAG DICOM GET RAD FILM
 tag | FILM
 routine | [MAGDRPCB](http://code.osehra.org/dox/Routine_MAGDRPCB_source.html)
 return value type | ARRAY
 description | This RPC is used to find an entry in the FILM SIZE file (#78.4).

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FILM | LITERAL | 30 | true | This is the name of the film size to be used in the lookup process. | 