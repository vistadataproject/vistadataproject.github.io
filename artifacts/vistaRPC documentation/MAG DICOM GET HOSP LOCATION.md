---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG DICOM GET HOSP LOCATION 

 property | value 
--- | --- 
 label | MAG DICOM GET HOSP LOCATION
 tag | GETLOC
 routine | [MAGDRPCB](http://code.osehra.org/dox/Routine_MAGDRPCB_source.html)
 return value type | ARRAY
 description | Return a list of matching hospital locations

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | LOCATION | LITERAL | 30 | true | Hospital location to look up. | 