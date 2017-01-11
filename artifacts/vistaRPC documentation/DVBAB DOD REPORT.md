---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBAB DOD REPORT 

 property | value 
--- | --- 
 label | DVBAB DOD REPORT
 tag | SENDRPT
 routine | [DVBABDOD](http://code.osehra.org/dox/Routine_DVBABDOD_source.html)
 return value type | GLOBAL ARRAY
 description | This remote procedure call returns a DOD report from the FHIE framework.  The RPC is designed specifically for the FHIE VistA server not the local VAMC facilities.  It is distributed nationally with the CAPRI application to keep the remote procedures and the DVBA CAPRI GUI option consistent on all systems using CAPRI.  Please do not use. Input:  IEN       = Patient's DFN        DATATYPE  = Type of data being requested        BEGDATE   = Beginning search date        ENDDATE   = Ending search date        ORMAX     = Max number of entries for report 

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL |  |  |  | 
| DATATYPE | LITERAL |  |  |  | 
| BEGDATE | LITERAL |  |  |  | 
| ENDDATE | LITERAL |  |  |  | 
| ORMAX | LITERAL |  |  |  | 




 ###### Generated on January 11th 2017, 6:39:43 am