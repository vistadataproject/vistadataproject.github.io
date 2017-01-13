---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; KMPD ROUTINE LINE SRCH 

 property | value 
--- | --- 
 label | {::nomarkdown}KMPD ROUTINE LINE SRCH{:/}
 tag | {::nomarkdown}ROUSRC2{:/}
 routine | [KMPDU2](http://code.osehra.org/dox/Routine_KMPDU2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Search routine(s) for text.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ROUTINES{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Array containg routine names to be searched.        array(\RoutineName\)=\\{:/} | 
| {::nomarkdown}SEARCH TEXT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}245{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Text to search for.{:/} | 
| {::nomarkdown}GLOBAL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Temporary global storage for data.  Must be ^TMP or ^UTILITY.{:/} | 




 Generated on January 13th 2017, 6:15:57 am