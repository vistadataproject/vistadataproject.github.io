---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DVBAB MPI ASSIGN ICN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DVBAB MPI ASSIGN ICN{:/}
 tag | {::nomarkdown}MPI{:/}
 routine | [DVBCPATA](http://code.osehra.org/dox/Routine_DVBCPATA_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This call should be made after a new patient is added into the patient file.  It will call the MPI to assign an ICN.  If no ICN can be obtained after 30 seconds, a local ICN will be assigned and the local ICN flag set.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}