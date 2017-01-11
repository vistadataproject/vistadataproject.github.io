---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MPIF CHANGE CMOR 

 property | value 
--- | --- 
 label | MPIF CHANGE CMOR
 tag | RCCMOR
 routine | [MPIFRPC](http://code.osehra.org/dox/Routine_MPIFRPC_source.html)
 return value type | SINGLE VALUE
 description | This remote procedure call (RPC) allows the changing/updating of the COORDINATING MASTER OF RECORD (#991.03) field in the PATIENT (#2) file for a specific patient. An A08 Update message can also be triggered.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ICN | LITERAL | 10 | true | ICN - not including the checksum | 
| CMOR | LITERAL | 3 | true | The station number of the site that is to become the CMOR | 
| SSN | LITERAL | 9 | true | Social Security Number for the patient that is to be changed.  SSN willonly be used if ICN is not found to check if the problem is with the AICNx-ref on the ICN field. | 
| A08 | LITERAL | 1 | true | This field will serve as a flag to note whether or not an A08 update message should be triggered. | 