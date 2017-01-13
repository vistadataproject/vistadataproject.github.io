---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DVBAB MPI ASSIGN ICN 

 property | value 
--- | --- 
 label | {::nomarkdown}DVBAB MPI ASSIGN ICN{:/}
 tag | {::nomarkdown}MPI{:/}
 routine | [DVBCPATA](http://code.osehra.org/dox/Routine_DVBCPATA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This call should be made after a new patient is added into the patient file.  It will call the MPI to assign an ICN.  If no ICN can be obtained after 30 seconds, a local ICN will be assigned and the local ICN flag set.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 6:44:47 am