---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MPIF REMOTE ICN UPDATE 

 property | value 
--- | --- 
 label | MPIF REMOTE ICN UPDATE
 tag | UPDATE
 routine | [MPIFRPC2](http://code.osehra.org/dox/Routine_MPIFRPC2_source.html)
 return value type | SINGLE VALUE
 description | This remote procedure call (RPC) allows the remote update of the INTEGRATION CONTROL NUMBER (#991.01), ICN CHECKSUM (#991.02), and COORDINATING MASTER OF RECORD (#991.03) fields in the PATIENT (#2) file at a specified site. The patient is found based upon social security number.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| SSN | LITERAL | 9 | true | Social Security Number of the patient to be updated. | 
| ICN | LITERAL | 16 | true | ICN - without the checksum to be updated in field 991.01 | 
| CHECK | LITERAL | 6 | true |  CHECKSUM for the patient to be stored in field 991.02 | 
| CMOR | LITERAL | 3 | true |  Station Number to be stored as the CMOR in field 991.03. | 
| A08 | LITERAL | 1 | true | If an A08 message needs to be sent this flag should be set to 1. | 




 Generated on January 11th 2017, 7:15:04 am