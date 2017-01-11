---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGTP PUT NOTE 

 property | value 
--- | --- 
 label | MAGTP PUT NOTE
 tag | PUTNOTE
 routine | [MAGTP014](http://code.osehra.org/dox/Routine_MAGTP014_source.html)
 return value type | ARRAY
 description | Set the text of a note attached to a specified case.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ENT | LIST |  | true | Input Array: Note text on each line | 
| LRAC | LITERAL | 14 | true | Accession Code for the case | 




 ###### Generated on January 11th 2017, 6:39:43 am