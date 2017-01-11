---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGG IMAGE INFO 

 property | value 
--- | --- 
 label | MAGG IMAGE INFO
 tag | IMAGEINF
 routine | [MAGGTU3](http://code.osehra.org/dox/Routine_MAGGTU3_source.html)
 return value type | ARRAY
 description | Returns information on 1 Image

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 30 | true | internal entry number in IMAGE file  ^MAG(2005,IEN | 
| NOQACHK | LITERAL | 4 | true | If this flag is sent with a value of 1, then the QA check willnot be run.  Image information will be returned even if it is animage of Questionable Integrity.This is used when deleting an Image, but the user needs to seeinformation that may have been blocked otherwise. | 




 Generated on January 11th 2017, 7:15:04 am