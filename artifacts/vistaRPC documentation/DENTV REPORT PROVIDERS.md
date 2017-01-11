---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV REPORT PROVIDERS 

 property | value 
--- | --- 
 label | DENTV REPORT PROVIDERS
 tag | PROV
 routine | [DENTVAU](http://code.osehra.org/dox/Routine_DENTVAU_source.html)
 return value type | ARRAY
 description | Returns an array containing all dental providers with 8 character Provider Ids that belong to the selected division.  If the provider has no divisions listed in file 200, then they show up under any division selection.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| STN | LITERAL | 10 | true | Pass if you wish to sort providers by station. | 
| ACT | LITERAL | 10 | true | Pass this flag if you wish to screen for only active providers. | 




Generated on January 11th 2017, 6:34:23 am