---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG STORAGE FETCH 

 property | value 
--- | --- 
 label | MAG STORAGE FETCH
 tag | FETCH
 routine | [MAGSFTCH](http://code.osehra.org/dox/Routine_MAGSFTCH_source.html)
 return value type | ARRAY
 description | This Remote Procedure allows the invoking client to copy or move image files

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGIEN | LITERAL | 30 | true | <start IMAGE ien> | <stop IMAGE ien> | 
| DATE | LITERAL | 10 | true | <Start image saved date> | <Stop image saved date> | 
| NETLOC | LITERAL | 30 | true | FROM - network location | TO - network location | REMOVE source file the first pipe-separated piece of the input value will be theinternal entry number of source NETWORK LOCATION file (#2005.2)The second pipe-separated piece will be the internal entry number of destination NETWORK LOCATION file (#2005.2)The third pipe-separated piece of input value will be the option for removing source image files (=1) | 




Generated on January 11th 2017, 6:34:23 am