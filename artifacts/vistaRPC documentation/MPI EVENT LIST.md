---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MPI EVENT LIST 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MPI EVENT LIST{:/}
 tag | {::nomarkdown}LINKDATA{:/}
 routine | [MPIRPC](http://code.osehra.org/dox/Routine_MPIRPC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC is used to return the list of all LINK and DO NOT LINK records associated with the ICN list passed as input.  The DO NOT LINK list will be derived from the records in the MPI DO NOT LINK file (#985.28) and pulled using the GET^MPIDNL API. The LINK list will be built from PRIMARYICN values associated with any of the ICNs in the input list.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SOURCEID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}200{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter is a list of ICN/VPID's that IMDQ Toolkit will provide toget a listing of all of the related LINK and DO NOT LINK events.  Theformat of this parameter is as follows: ICNLIST - LIST OF ICN'S  Format:A comma delimited list of Source IDs, each Source ID in the format: ICN/VPIDSourceSytemIDSourceAssigningAuthorityIDType  Example: 1001170718V338193200MUSVHANI,101178194V591076200MUSVHANI,1008521877V768382200MUSVHANI,1008522314V828468200MUSVHANI{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 7:57:53 am</p>{:/}