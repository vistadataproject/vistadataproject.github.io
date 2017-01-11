---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV TP GET PROVIDERS 

 property | value 
--- | --- 
 label | DENTV TP GET PROVIDERS
 tag | PROV
 routine | [DENTVTP1](http://code.osehra.org/dox/Routine_DENTVTP1_source.html)
 return value type | ARRAY
 description | This will return a list of all providers who have provided service to this patient.  Each provider will have a flag indicating whether or not the provider is current.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DENTL | LIST | 30 | true | DENTL(\StartDate\) - optional - start date in FM format - default = 0DENTL(\EndDate\)   - optional - end date in FM format  - default = todayDENTL(\Patient\)   - required - pointer to PATIENT file | 