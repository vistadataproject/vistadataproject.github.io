---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQCN SVC W_SYNONYMS 

 property | value 
--- | --- 
 label | ORQQCN SVC W_SYNONYMS
 tag | SVCSYN
 routine | [ORQQCN2](http://code.osehra.org/dox/Routine_ORQQCN2_source.html)
 return value type | GLOBAL ARRAY
 description | This is a modified version of ORQQCN GET SERVICE TREE that also includessynonyms for the services returned. It also allows passing of an optionalConsult IEN, for screening allowable services to forward the consult to,especially in the case of interfacility consults.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| Start With | LITERAL | 32 |  | Which service in the hierarchy to begin with. | 
| Purpose | LITERAL | 2 |  | 0 for display purposes, 1 to order or forward a consult. | 
| Include Synonyms | LITERAL | 2 |  | 0 to exclude synonyms, 1 to include synonyms. | 
| Consult IEN | LITERAL | 16 | true | OPTIONAL - Include pointer to file 123, the Consult Request file.  Used when forwarding a consult, and screening needs to be done to limit the list of services. | 




Generated on January 11th 2017, 6:34:23 am