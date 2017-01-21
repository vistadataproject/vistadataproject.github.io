---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; KMPD APPL STATUS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}KMPD APPL STATUS{:/}
 tag | {::nomarkdown}STATUS{:/}
 routine | [KMPDU6](http://code.osehra.org/dox/Routine_KMPDU6_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Returns the status for cm applications: HL7                                        RUM                                        SAGG                                        TIMING{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}APPLICATION{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}\H\ - hl7\R\ - rum\S\ - sagg\T\ - timing{:/} | 
| {::nomarkdown}GLOBAL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Global in which to store data.  Ex: ^TMP($J){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:20:10 am</p>{:/}