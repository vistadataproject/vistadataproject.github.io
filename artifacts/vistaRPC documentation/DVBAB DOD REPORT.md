---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DVBAB DOD REPORT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DVBAB DOD REPORT{:/}
 tag | {::nomarkdown}SENDRPT{:/}
 routine | [DVBABDOD](http://code.osehra.org/dox/Routine_DVBABDOD_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This remote procedure call returns a DOD report from the FHIE framework.  The RPC is designed specifically for the FHIE VistA server not the local VAMC facilities.  It is distributed nationally with the CAPRI application to keep the remote procedures and the DVBA CAPRI GUI option consistent on all systems using CAPRI.  Please do not use. Input:  IEN       = Patient's DFN        DATATYPE  = Type of data being requested        BEGDATE   = Beginning search date        ENDDATE   = Ending search date        ORMAX     = Max number of entries for report {:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}DATATYPE{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}BEGDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}ENDDATE{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 
| {::nomarkdown}ORMAX{:/} | {::nomarkdown}LITERAL{:/} |  |  |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}