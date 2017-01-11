---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWTIU WINPRINT NOTE 

 property | value 
--- | --- 
 label | ORWTIU WINPRINT NOTE
 tag | PRINTW
 routine | [ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
 return value type | GLOBAL ARRAY
 description | Returns a formatted global of a TIU document for output to a Windows printdevice.


### Method description

 property | value 
--- | --- 
 Method comment | TIU print to windows printer

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| Note IEN | LITERAL | 20 | true | IEN of document in file 8925. | 
| Chart Copy? | LITERAL | 2 |  | If true, print chart copy, else print work copy. | 




Generated on January 11th 2017, 6:34:23 am