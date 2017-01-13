---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; KMPD ASSOC ROUTINE ADD_DEL 

 property | value 
--- | --- 
 label | {::nomarkdown}KMPD ASSOC ROUTINE ADD_DEL{:/}
 tag | {::nomarkdown}ASSCROU{:/}
 routine | [KMPDU4](http://code.osehra.org/dox/Routine_KMPDU4_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Delete all entries in multiple field #11 (ASSOCIATED ROUTINE) in file#8972.1 (CM CODE EVALUATOR) and then add entries to multiple.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAM1{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Ien for file #8972.1 (CM CODE EVALUATOR).{:/} | 
| {::nomarkdown}PARAM2{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Array containing routine names to be entered into field #11 (ASSOCIATEDROUTINE).         ARRAY(1)=\ROUTINE1\        ARRAY(2)=\ROUTINE2\        ARRAY(...)=\...\{:/} | 




 Generated on January 13th 2017, 7:11:27 am