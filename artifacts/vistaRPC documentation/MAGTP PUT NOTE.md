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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ENT | LIST |  | true | Input Array: Note text on each line | 
| vs:Input_Parameter-8994_02 | LRAC | LITERAL | 14 | true | Accession Code for the case | 