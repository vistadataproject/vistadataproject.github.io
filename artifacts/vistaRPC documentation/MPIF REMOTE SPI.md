---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MPIF REMOTE SPI 

 property | value 
--- | --- 
 label | MPIF REMOTE SPI
 tag | SPI
 routine | [MPIFRPC2](http://code.osehra.org/dox/Routine_MPIFRPC2_source.html)
 return value type | ARRAY
 description | This remote procedure call (RPC) allows the remote sending of a specific patient at a specific site to the MPI for ICN assignment.  The patient is found based upon social security number.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| SSN | LITERAL | 9 | true | SSN for the patient that is to be sent to the MPI for ICN assignment.  Should there be more than one entry with that SSN, all will be sent. | 
| DFN | LITERAL | 20 | true | DFN for patient to be SPI'd.  DFN or SSN should be used to find patient. | 




Generated on January 11th 2017, 6:34:23 am