---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; DVBAB FIND DFN BY ICN 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DVBAB FIND DFN BY ICN{:/}
 tag | {::nomarkdown}ICN{:/}
 routine | [DVBABDOD](http://code.osehra.org/dox/Routine_DVBABDOD_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This remote procedure call returns the patient's DFN associated with the ICN passed to the RPC.  The DFN is the internal entry number in the Patient (#2) file.  The RPC is designed specifically for the FHIE VistA server not the local VAMC facilities.  It is distributed nationally with the CAPRI application to keep the remote procedures and the DVBA CAPRI GUI option consistent on all systems using CAPRI.  Please do not use.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ICN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}INTEGRATION CONTROL NUMBER{:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}