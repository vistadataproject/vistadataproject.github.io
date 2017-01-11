---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; KMPD ROUTINE LINE SRCH 

 property | value 
--- | --- 
 label | KMPD ROUTINE LINE SRCH
 tag | ROUSRC2
 routine | [KMPDU2](http://code.osehra.org/dox/Routine_KMPDU2_source.html)
 return value type | GLOBAL ARRAY
 description | Search routine(s) for text.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ROUTINES | LIST | 60 | true | Array containg routine names to be searched.        array(\RoutineName\)=\\ | 
| SEARCH TEXT | LITERAL | 245 | true | Text to search for. | 
| GLOBAL | LITERAL | 60 | true | Temporary global storage for data.  Must be ^TMP or ^UTILITY. | 




 Generated on January 11th 2017, 7:15:04 am