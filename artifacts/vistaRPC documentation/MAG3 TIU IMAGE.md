---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG3 TIU IMAGE 

 property | value 
--- | --- 
 label | MAG3 TIU IMAGE
 tag | FILE
 routine | [MAGGNTI](http://code.osehra.org/dox/Routine_MAGGNTI_source.html)
 return value type | SINGLE VALUE
 description | Files the TIU pointer in Imaging and the Imaging Pointer in TIU.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | MAGDA | LITERAL | 30 | true | This is the Image File entry Internal number. | 
| vs:Input_Parameter-8994_02 | TIUDA | LITERAL | 30 | true | This is the TIU internal number. | 