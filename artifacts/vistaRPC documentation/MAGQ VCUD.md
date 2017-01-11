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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| Pointer | LITERAL | 256 | true | This is the network location file IEN. | 
| Extension | LITERAL | 3 | true | This is the image file extension of the file whose network reference is inneed of updating. | 
| IEN | LITERAL | 256 | true | This is the IMAGE file (#2005) internal entry number. | 




 ###### Generated on January 11th 2017, 6:39:42 am