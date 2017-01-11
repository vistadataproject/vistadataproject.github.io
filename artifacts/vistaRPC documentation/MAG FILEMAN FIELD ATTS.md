---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG FILEMAN FIELD ATTS 

 property | value 
--- | --- 
 label | MAG FILEMAN FIELD ATTS
 tag | FIELDATT
 routine | [MAGUFFLA](http://code.osehra.org/dox/Routine_MAGUFFLA_source.html)
 return value type | ARRAY
 description | This remote procedure returns a list of attributes and attribute values for a field in a FileMan file.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FILENO | LITERAL | 20 | true | This is the number of a FileMan file or subfile. | 
| FIELDNO | LITERAL | 20 | true | This is the field within the specified FileMan file or subfile for which attributes are being requested. | 




Generated on January 11th 2017, 6:34:23 am