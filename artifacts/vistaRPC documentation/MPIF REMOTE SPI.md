---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MPIF REMOTE SPI 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MPIF REMOTE SPI{:/}
 tag | {::nomarkdown}SPI{:/}
 routine | [MPIFRPC2](http://code.osehra.org/dox/Routine_MPIFRPC2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This remote procedure call (RPC) allows the remote sending of a specific patient at a specific site to the MPI for ICN assignment.  The patient is found based upon social security number.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SSN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}9{:/} | {::nomarkdown}true{:/} | {::nomarkdown}SSN for the patient that is to be sent to the MPI for ICN assignment.  Should there be more than one entry with that SSN, all will be sent.{:/} | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}20{:/} | {::nomarkdown}true{:/} | {::nomarkdown}DFN for patient to be SPI'd.  DFN or SSN should be used to find patient.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:14 am</p>{:/}