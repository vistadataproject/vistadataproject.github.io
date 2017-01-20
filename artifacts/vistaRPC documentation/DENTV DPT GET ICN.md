---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV DPT GET ICN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTV DPT GET ICN{:/}
 tag | {::nomarkdown}ICN{:/}
 routine | [DENTVUTL](http://code.osehra.org/dox/Routine_DENTVUTL_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC takes in a patient identifier and returns the patient's ICN.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PAT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}A patient identifier which can be their DFN, Name, or SSN.{:/} | 
| {::nomarkdown}ISSSN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}A boolean flag (0,1) which indicates whether or not the PAT value is a SSN value.  If a value is not passed, the flag defaults to 0.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 7:40:09 am</p>{:/}