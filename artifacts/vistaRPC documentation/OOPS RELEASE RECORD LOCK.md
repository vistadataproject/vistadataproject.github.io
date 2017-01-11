---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; OOPS RELEASE RECORD LOCK 

 property | value 
--- | --- 
 label | OOPS RELEASE RECORD LOCK
 tag | CLRLCK
 routine | [OOPSGUI3](http://code.osehra.org/dox/Routine_OOPSGUI3_source.html)
 return value type | SINGLE VALUE
 description | This broker call will release the previously locked ASISTS record.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 20 | true | This input parameter contains the ASISTS Internal Record Number that will beused to attempt to unlock a previously locked record. | 