---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG FILEMAN FIELD LIST 

 property | value 
--- | --- 
 label | MAG FILEMAN FIELD LIST
 tag | FIELDLST
 routine | [MAGUFFLL](http://code.osehra.org/dox/Routine_MAGUFFLL_source.html)
 return value type | ARRAY
 description | This remote procedure returns a list of fields from a FileMan file or subfile in either alpha or numeric order.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FILENO | LITERAL | 20 | true | This is the number of a FileMan file or subfile. | 
| ORDER | LITERAL | 1 | true | This is the desired return order for the field list:  either A for alpha or N for numeric. | 




 ###### Generated on January 11th 2017, 6:39:43 am