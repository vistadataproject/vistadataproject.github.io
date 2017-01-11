---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWLEX GETI10DX 

 property | value 
--- | --- 
 label | ORWLEX GETI10DX
 tag | GETI10DX
 routine | [ORWLEX](http://code.osehra.org/dox/Routine_ORWLEX_source.html)
 return value type | ARRAY
 description | This call wraps the Lexicon API $$DIAGSRCH^LEX10CS to satisfy the requirements of the ICD-10-CM diagnosis search.


### Method description

 property | value 
--- | --- 
 Method comment | RPC ORWLEX GET10DX

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ORX | LITERAL |  | true | This is the search term. | 
| ORDT | LITERAL |  | true | Optional date (usually corresponding to the encounter date). Defaults to TODAY. | 




 Generated on January 11th 2017, 7:15:04 am