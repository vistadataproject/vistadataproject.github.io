---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; RG VIEW VISTA EXCEPTIONS 

 property | value 
--- | --- 
 label | RG VIEW VISTA EXCEPTIONS
 tag | EN
 routine | [RGRPC](http://code.osehra.org/dox/Routine_RGRPC_source.html)
 return value type | ARRAY
 description | This RPC will allow the MPI IMDQ staff to view VistA exceptions for a given patient logged during a specific date range.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ICN | LITERAL | 10 | true | Integration Control Number for patient exceptions are being requested for.  If ICN is not passed, then SSN or DFN must be. | 
| vs:Input_Parameter-8994_02 | SSN | LITERAL | 9 | true | Social Security Number for patient exceptions are being requested for.  If SSN is not passed, then ICN or DFN must be. | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 32000 | true | Internal Entry Number for patient, in the PATIENT (#2) file, exceptionsare being requested for  If DFN is not passed, then ICN or SSN must be. | 
| vs:Input_Parameter-8994_02 | BRANGE | LITERAL | 7 | true | Beginning Date Range for exceptions to be in. | 
| vs:Input_Parameter-8994_02 | ERANGE | LITERAL | 7 | true | Ending Date Range for Exceptions to have been logged in. | 