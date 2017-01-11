---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBAB MPI ASSIGN ICN 

 property | value 
--- | --- 
 label | DVBAB MPI ASSIGN ICN
 tag | MPI
 routine | [DVBCPATA](http://code.osehra.org/dox/Routine_DVBCPATA_source.html)
 return value type | SINGLE VALUE
 description | This call should be made after a new patient is added into the patient file.  It will call the MPI to assign an ICN.  If no ICN can be obtained after 30 seconds, a local ICN will be assigned and the local ICN flag set.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL |  | true |  | 




Generated on January 11th 2017, 6:34:23 am