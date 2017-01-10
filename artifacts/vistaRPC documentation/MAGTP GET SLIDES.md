---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGTP GET SLIDES 

 property | value 
--- | --- 
 label | MAGTP GET SLIDES
 tag | GETSD
 routine | [MAGTP004](http://code.osehra.org/dox/Routine_MAGTP004_source.html)
 return value type | ARRAY
 description | Get Specimen, Smear Prep/Block and Stain/Procedure/Slide infofor a specified case

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | AP Section | LITERAL | 2 | true | AP Section | 
| vs:Input_Parameter-8994_02 | Year | LITERAL | 4 | true | Year | 
| vs:Input_Parameter-8994_02 | Access Number | LITERAL | 5 | true | Access Number | 