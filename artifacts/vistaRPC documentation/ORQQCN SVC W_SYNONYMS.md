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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | Start With | LITERAL | 32 |  | Which service in the hierarchy to begin with. | 
| vs:Input_Parameter-8994_02 | Purpose | LITERAL | 2 |  | 0 for display purposes, 1 to order or forward a consult. | 
| vs:Input_Parameter-8994_02 | Include Synonyms | LITERAL | 2 |  | 0 to exclude synonyms, 1 to include synonyms. | 
| vs:Input_Parameter-8994_02 | Consult IEN | LITERAL | 16 | true | OPTIONAL - Include pointer to file 123, the Consult Request file.  Used when forwarding a consult, and screening needs to be done to limit the list of services. | 