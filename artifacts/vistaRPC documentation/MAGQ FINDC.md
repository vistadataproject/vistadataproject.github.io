---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGQ FINDC 

 property | value 
--- | --- 
 label | MAGQ FINDC
 tag | FINDC
 routine | [MAGQBUT5](http://code.osehra.org/dox/Routine_MAGQBUT5_source.html)
 return value type | SINGLE VALUE
 description | By placing carat delimited values in the find value parameterthe subscriber can perform a compound index lookup on an extended primary key.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FNUM | LITERAL | 30 | true | The file number of the content table. | 
| IENS | LITERAL | 30 | true | The IENS of the main level or subfile level of the content table. | 
| FLAGS | LITERAL | 30 | true | The FIND1^DIC lookup options. | 
| FNDVALUE | LITERAL | 60 | true | The carat delimited lookup.  Each piece is the same as the subscript in the index. | 
| XREF | LITERAL | 30 | true | The subscriber specified cross reference for the lookup. | 
| SCREEN | LITERAL | 30 | true | The subscriber specified DIC(\S\) logic for the lookup. | 




 ###### Generated on January 11th 2017, 6:39:43 am