---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; KMPD ASSOC ROUTINE ADD_DEL 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}KMPD ASSOC ROUTINE ADD_DEL{:/}
 tag | {::nomarkdown}ASSCROU{:/}
 routine | [KMPDU4](http://code.osehra.org/dox/Routine_KMPDU4_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Delete all entries in multiple field #11 (ASSOCIATED ROUTINE) in file#8972.1 (CM CODE EVALUATOR) and then add entries to multiple.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PARAM1{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Ien for file #8972.1 (CM CODE EVALUATOR).{:/} | 
| {::nomarkdown}PARAM2{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Array containing routine names to be entered into field #11 (ASSOCIATEDROUTINE).         ARRAY(1)=\ROUTINE1\        ARRAY(2)=\ROUTINE2\        ARRAY(...)=\...\{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}