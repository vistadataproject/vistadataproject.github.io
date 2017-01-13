---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWLEX GETI10DX 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWLEX GETI10DX{:/}
 tag | {::nomarkdown}GETI10DX{:/}
 routine | [ORWLEX](http://code.osehra.org/dox/Routine_ORWLEX_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This call wraps the Lexicon API $$DIAGSRCH^LEX10CS to satisfy the requirements of the ICD-10-CM diagnosis search.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | RPC ORWLEX GET10DX

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORX{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the search term.{:/} | 
| {::nomarkdown}ORDT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Optional date (usually corresponding to the encounter date). Defaults to TODAY.{:/} | 




 Generated on January 13th 2017, 6:24:32 am