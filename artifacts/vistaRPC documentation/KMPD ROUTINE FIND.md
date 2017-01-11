---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; KMPD ROUTINE FIND 

 property | value 
--- | --- 
 label | KMPD ROUTINE FIND
 tag | ROUFIND
 routine | [KMPDU2](http://code.osehra.org/dox/Routine_KMPDU2_source.html)
 return value type | GLOBAL ARRAY
 description | Return list of routine names.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PARAM1 | LITERAL | 30 | true | Routine name to search for (may contain an asterisk (*) for a list). | 
| PARAM2 | LITERAL | 60 | true | Temporary global storage name.  Must be either ^TMP or ^UTILITY. | 




Generated on January 11th 2017, 6:34:23 am