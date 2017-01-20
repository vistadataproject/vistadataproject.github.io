---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV ALERTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTV ALERTS{:/}
 tag | {::nomarkdown}GAL{:/}
 routine | [DENTVUTL](http://code.osehra.org/dox/Routine_DENTVUTL_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC gets Dental Alerts from file 220.  It also sets them into 220.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The patient ien to look up Dental Alerts in file 220.{:/} | 
| {::nomarkdown}ALERTS{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}List of Alert text entries to be added to the dental patient, e.g.:Sedation PremedTravel Issue{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 5:08:32 am</p>{:/}