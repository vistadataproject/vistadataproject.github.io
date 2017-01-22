---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV TP GET PROVIDERS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTV TP GET PROVIDERS{:/}
 tag | {::nomarkdown}PROV{:/}
 routine | [DENTVTP1](http://code.osehra.org/dox/Routine_DENTVTP1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This will return a list of all providers who have provided service to this patient.  Each provider will have a flag indicating whether or not the provider is current.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DENTL{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DENTL(\StartDate\) - optional - start date in FM format - default = 0DENTL(\EndDate\)   - optional - end date in FM format  - default = todayDENTL(\Patient\)   - required - pointer to PATIENT file{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}