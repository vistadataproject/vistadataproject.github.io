---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; KMPD ASSOC ROUTINE ADD_DEL 

 property | value 
--- | --- 
 label | KMPD ASSOC ROUTINE ADD_DEL
 tag | ASSCROU
 routine | [KMPDU4](http://code.osehra.org/dox/Routine_KMPDU4_source.html)
 return value type | ARRAY
 description | Delete all entries in multiple field #11 (ASSOCIATED ROUTINE) in file#8972.1 (CM CODE EVALUATOR) and then add entries to multiple.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PARAM1 | LITERAL | 60 | true | Ien for file #8972.1 (CM CODE EVALUATOR). | 
| PARAM2 | LIST | 60 | true | Array containing routine names to be entered into field #11 (ASSOCIATEDROUTINE).         ARRAY(1)=\ROUTINE1\        ARRAY(2)=\ROUTINE2\        ARRAY(...)=\...\ | 




Generated on January 11th 2017, 6:34:23 am