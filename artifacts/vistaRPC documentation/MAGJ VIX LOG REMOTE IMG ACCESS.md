---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MAGJ VIX LOG REMOTE IMG ACCESS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAGJ VIX LOG REMOTE IMG ACCESS{:/}
 tag | {::nomarkdown}LOGRIA{:/}
 routine | [MAGJVAPI](http://code.osehra.org/dox/Routine_MAGJVAPI_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Log ViX-enabled Remote Image Access Events.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}CARET DELIMITED AS FOLLOWS:  ^01: ACTION ... \VR-RV\_ subset member from ACTION+1^MAGGTAU  ^02: RADFN .... IEN of PATIENT file (#2)  ^03: MAGIEN ... IEN of IMAGE file (#2005)  ^04: NIMGS .... VRad Image Count  ^05: REMOTE ... VRad Remote Read Flag  ^06: MAGJVRV .. VRad Version  ^07: USERCLS .. VRad User Class  ^08: VIXTXID .. VRad VIX Transaction ID{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:07 am</p>{:/}