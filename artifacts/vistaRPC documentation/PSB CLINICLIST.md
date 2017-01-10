---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; PSB CLINICLIST 

 property | value 
--- | --- 
 label | PSB CLINICLIST
 tag | GETLIST
 routine | [PSBRPC](http://code.osehra.org/dox/Routine_PSBRPC_source.html)
 return value type | GLOBAL ARRAY
 description | Returns Active Clinic names based on Search criteria.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PREFIX | LITERAL | 30 | true | First search criteria, which is used to find clinic names that begin with these characters to create a subset list. | 
| vs:Input_Parameter-8994_02 | CONTAINS | LITERAL | 30 | true | Second search criteria, if populated, then this search text is used to search the previously created Subset list, for if Contains this text. Then this final list is sent back to the BCMA GUI Client. | 