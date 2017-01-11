---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBAB FIND DFN BY ICN 

 property | value 
--- | --- 
 label | DVBAB FIND DFN BY ICN
 tag | ICN
 routine | [DVBABDOD](http://code.osehra.org/dox/Routine_DVBABDOD_source.html)
 return value type | GLOBAL ARRAY
 description | This remote procedure call returns the patient's DFN associated with the ICN passed to the RPC.  The DFN is the internal entry number in the Patient (#2) file.  The RPC is designed specifically for the FHIE VistA server not the local VAMC facilities.  It is distributed nationally with the CAPRI application to keep the remote procedures and the DVBA CAPRI GUI option consistent on all systems using CAPRI.  Please do not use.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| ICN | LITERAL |  | true | INTEGRATION CONTROL NUMBER | 




 ###### Generated on January 11th 2017, 6:39:43 am