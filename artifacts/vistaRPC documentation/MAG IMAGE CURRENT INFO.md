---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG IMAGE CURRENT INFO 

 property | value 
--- | --- 
 label | MAG IMAGE CURRENT INFO
 tag | INFO
 routine | [MAGDQR04](http://code.osehra.org/dox/Routine_MAGDQR04_source.html)
 return value type | ARRAY
 description | This Remote Procedure returns current values for the variousDICOM tags that are to be included in the header of an exportedimage.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | IMAGE | LITERAL | 20 | true | The value of this parameter is a number. This number is a pointerinto the Image File (#2005).This RPC will return information for the image that is identifiedby this pointer-value. | 