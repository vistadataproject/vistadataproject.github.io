---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWLEX GETFREQ 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWLEX GETFREQ{:/}
 tag | {::nomarkdown}GETFREQ{:/}
 routine | [ORWLEX](http://code.osehra.org/dox/Routine_ORWLEX_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This call wraps the Lexicon API $$FREQ^LEXU to satisfy the requirements of the ICD-10-CM diagnosis search.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Call $$FREQ^LEXU to fetch the frequency of use of keywords contained in search string
 Input Parameters | {::nomarkdown}ORSRCHTX{:/}
 Lines | ```
 S ORY=$$FREQ^LEXU(ORSRCHTX) ; ICR #5679
```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ORSRCHTX{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the search text/term.{:/} | 




 Generated on January 13th 2017, 6:55:29 am