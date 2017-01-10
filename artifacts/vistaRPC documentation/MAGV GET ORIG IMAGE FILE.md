---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV GET ORIG IMAGE FILE 

 property | value 
--- | --- 
 label | MAGV GET ORIG IMAGE FILE
 tag | GETORIG
 routine | [MAGVRS24](http://code.osehra.org/dox/Routine_MAGVRS24_source.html)
 return value type | ARRAY
 description | This RPC returns an array of image file IENs associated with aSOP instance.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | SOPIEN | LITERAL |  |  | The IEN of the IMAGE SOP INSTANCE file (#2005.64) to be used in the RPC function. | 