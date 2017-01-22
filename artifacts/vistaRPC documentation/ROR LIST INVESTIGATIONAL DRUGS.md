---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ROR LIST INVESTIGATIONAL DRUGS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ROR LIST INVESTIGATIONAL DRUGS{:/}
 tag | {::nomarkdown}RORINV{:/}
 routine | [RORRP017](http://code.osehra.org/dox/Routine_RORRP017_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}[ROR LIST INVESTIGATIONAL DRUGS] returns a list of drugs that areclassified as investigational in file ^PS(50.605 and have a drug classof IN140 for HEPC or IN150 for HIV{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PART{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}A string that is passed in to filter the number of drugs returned.If the string is ?? then the call will return all drugs that qualify.{:/} | 
| {::nomarkdown}FLAGS{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}If equal to 1 this will work with the HEPC Registry.  If equal to 2 willwork with the HIV Registry{:/} | 
| {::nomarkdown}NUMBER{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}DEPRECATED{:/} | 
| {::nomarkdown}FROM{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}DEPRECATED{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}