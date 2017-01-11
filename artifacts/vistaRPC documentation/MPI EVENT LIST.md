---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MPI EVENT LIST 

 property | value 
--- | --- 
 label | MPI EVENT LIST
 tag | LINKDATA
 routine | [MPIRPC](http://code.osehra.org/dox/Routine_MPIRPC_source.html)
 return value type | ARRAY
 description | This RPC is used to return the list of all LINK and DO NOT LINK records associated with the ICN list passed as input.  The DO NOT LINK list will be derived from the records in the MPI DO NOT LINK file (#985.28) and pulled using the GET^MPIDNL API. The LINK list will be built from PRIMARYICN values associated with any of the ICNs in the input list.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| SOURCEID | LITERAL | 200 | true | This parameter is a list of ICN/VPID's that IMDQ Toolkit will provide toget a listing of all of the related LINK and DO NOT LINK events.  Theformat of this parameter is as follows: ICNLIST - LIST OF ICN'S  Format:A comma delimited list of Source IDs, each Source ID in the format: ICN/VPID|SourceSytemID|SourceAssigningAuthority|IDType  Example: 1001170718V338193|200M|USVHA|NI,101178194V591076|200M|USVHA|NI,1008521877V768382|200M|USVHA|NI,1008522314V828468|200M|USVHA|NI | 




 ###### Generated on January 11th 2017, 6:39:43 am