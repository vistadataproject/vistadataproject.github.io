---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; PSB MOB DRUG LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}PSB MOB DRUG LIST{:/}
 tag | {::nomarkdown}OILST{:/}
 routine | [PSBRPCMO](http://code.osehra.org/dox/Routine_PSBRPCMO_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Used by the BCMA/CPRS Med Order Button to return an array of drug.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PSBSCAN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}40{:/} | {::nomarkdown}true{:/} | {::nomarkdown}PSBSCAN is the value that has been scanned or entered by the user.{:/} | 
| {::nomarkdown}PSBOTYP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Type of list:     Dispensed Drugs   = \UD\     IV Medications    = \IV\     Orderable Item    = \OIT\     Drug Class        = \VAC\{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:04:53 am</p>{:/}