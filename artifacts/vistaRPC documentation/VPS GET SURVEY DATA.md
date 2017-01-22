---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VPS GET SURVEY DATA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}VPS GET SURVEY DATA{:/}
 tag | {::nomarkdown}GETRPC{:/}
 routine | [VPSSRVY2](http://code.osehra.org/dox/Routine_VPSSRVY2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Retrieves an array containing the patient's Clinical Survey information.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VPSPID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}25{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient ID such as the patient SSN OR DFN OR ICN OR VIC/CACfor whom the Clinical Questionnaire information is beingrequested.{:/} | 
| {::nomarkdown}VPSQIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}9{:/} |  | {::nomarkdown}Questionnaire IEN for filtering the results.{:/} | 
| {::nomarkdown}VPSQNM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} |  | {::nomarkdown}Questionnaire Name for filtering the results.{:/} | 
| {::nomarkdown}VPSFDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} |  | {::nomarkdown}Date From for filtering the results{:/} | 
| {::nomarkdown}VPSTDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} |  | {::nomarkdown}Date To for filtering the results{:/} | 
| {::nomarkdown}VPSNUM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}4{:/} |  | {::nomarkdown}Maxumum number of occurrences to return.{:/} | 
| {::nomarkdown}VPSTYP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient ID TYPE such as SSN or DFN OR ICN OR VIC/CAC.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}