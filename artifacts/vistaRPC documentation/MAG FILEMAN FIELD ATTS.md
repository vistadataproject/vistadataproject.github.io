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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FILENO | LITERAL | 20 | true | This is the number of a FileMan file or subfile. | 
| vs:Input_Parameter-8994_02 | FIELDNO | LITERAL | 20 | true | This is the field within the specified FileMan file or subfile for which attributes are being requested. | 