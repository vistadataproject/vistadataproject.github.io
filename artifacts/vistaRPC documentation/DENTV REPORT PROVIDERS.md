---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV REPORT PROVIDERS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTV REPORT PROVIDERS{:/}
 tag | {::nomarkdown}PROV{:/}
 routine | [DENTVAU](http://code.osehra.org/dox/Routine_DENTVAU_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns an array containing all dental providers with 8 character Provider Ids that belong to the selected division.  If the provider has no divisions listed in file 200, then they show up under any division selection.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}STN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pass if you wish to sort providers by station.{:/} | 
| {::nomarkdown}ACT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pass this flag if you wish to screen for only active providers.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}