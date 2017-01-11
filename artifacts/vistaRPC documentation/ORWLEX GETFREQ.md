---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWLEX GETFREQ 

 property | value 
--- | --- 
 label | ORWLEX GETFREQ
 tag | GETFREQ
 routine | [ORWLEX](http://code.osehra.org/dox/Routine_ORWLEX_source.html)
 return value type | SINGLE VALUE
 description | This call wraps the Lexicon API $$FREQ^LEXU to satisfy the requirements of the ICD-10-CM diagnosis search.


### Method description

 property | value 
--- | --- 
 Method comment | Call $$FREQ^LEXU to fetch the frequency of use of keywords contained in search string

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ORSRCHTX | LITERAL |  | true | This is the search text/term. | 