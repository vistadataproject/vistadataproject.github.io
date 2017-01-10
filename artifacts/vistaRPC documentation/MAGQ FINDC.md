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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FNUM | LITERAL | 30 | true | The file number of the content table. | 
| vs:Input_Parameter-8994_02 | IENS | LITERAL | 30 | true | The IENS of the main level or subfile level of the content table. | 
| vs:Input_Parameter-8994_02 | FLAGS | LITERAL | 30 | true | The FIND1^DIC lookup options. | 
| vs:Input_Parameter-8994_02 | FNDVALUE | LITERAL | 60 | true | The carat delimited lookup.  Each piece is the same as the subscript in the index. | 
| vs:Input_Parameter-8994_02 | XREF | LITERAL | 30 | true | The subscriber specified cross reference for the lookup. | 
| vs:Input_Parameter-8994_02 | SCREEN | LITERAL | 30 | true | The subscriber specified DIC(\S\) logic for the lookup. | 