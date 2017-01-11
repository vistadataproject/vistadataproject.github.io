---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGG OFFLINE IMAGE ACCESSED 

 property | value 
--- | --- 
 label | MAGG OFFLINE IMAGE ACCESSED
 tag | MAIL
 routine | [MAGGTU3](http://code.osehra.org/dox/Routine_MAGGTU3_source.html)
 return value type | SINGLE VALUE
 description | This sends a message when an image has been accessed from a Jukeboxplatter that is offline, as determined by having an entry in the file ^MAGQUEUE(2006.033.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGFILE | LITERAL | 90 | true | The full path and file name of the Image accessed. | 
| MAGIEN | LITERAL | 30 | true | The Internal entry number in file MAG(2005.   | 




 ###### Generated on January 11th 2017, 6:39:42 am