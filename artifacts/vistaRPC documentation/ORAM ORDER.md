---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORAM ORDER 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORAM ORDER{:/}
 tag | {::nomarkdown}ORDER{:/}
 routine | [ORAM](http://code.osehra.org/dox/Routine_ORAM_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC supports placing INR and CBC orders from the Anticoagulator application.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the patient id (i.e., the entry number of the patient in file 2).{:/} | 
| {::nomarkdown}ORDOC{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the ID of the ordering provider in file 200 (i.e., his \DUZ\).{:/} | 
| {::nomarkdown}ORQO{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number of the Quick Order to be placed (for either INR or CBC) in the Order Dialog file #101.41.{:/} | 
| {::nomarkdown}ORLOC{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number of the ordering location in the Hospital Location file (#42).{:/} | 
| {::nomarkdown}ORCDT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the expected Collection Date/Time of the lab test being ordered, in external date/time format.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:51 am</p>{:/}