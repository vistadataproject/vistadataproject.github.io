---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGQ VCUD 

 property | value 
--- | --- 
 label | MAGQ VCUD
 tag | VCUD
 routine | [MAGQBPG1](http://code.osehra.org/dox/Routine_MAGQBPG1_source.html)
 return value type | SINGLE VALUE
 description | This call is to update the Image file VMC file references.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | Pointer | LITERAL | 256 | true | This is the network location file IEN. | 
| vs:Input_Parameter-8994_02 | Extension | LITERAL | 3 | true | This is the image file extension of the file whose network reference is inneed of updating. | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL | 256 | true | This is the IMAGE file (#2005) internal entry number. | 