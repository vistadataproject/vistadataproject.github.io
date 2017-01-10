---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGQ JPUD 

 property | value 
--- | --- 
 label | MAGQ JPUD
 tag | JPUD
 routine | [MAGQBPG1](http://code.osehra.org/dox/Routine_MAGQBPG1_source.html)
 return value type | SINGLE VALUE
 description | This call is to update the Image file JUKEBOX file references.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | POINTER | LITERAL | 256 | true | This is the network location file IEN. | 
| vs:Input_Parameter-8994_02 | EXTENSION | LITERAL | 3 | true | This is the image file extension of the file whose jukebox reference is inneed of updating. | 
| vs:Input_Parameter-8994_02 | IEN | LITERAL | 256 | true | This is the IMAGE file (#2005) internal entry number. | 