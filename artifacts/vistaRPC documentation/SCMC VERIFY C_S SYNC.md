---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SCMC VERIFY C_S SYNC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SCMC VERIFY C_S SYNC{:/}
 tag | {::nomarkdown}VERPAT{:/}
 routine | [SCUTBK3](http://code.osehra.org/dox/Routine_SCUTBK3_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Successful result enables PCMM client to operate with PCMM server andreturns the value to use for RPCTimeLimit.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}SCPATCH{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}60{:/} | {::nomarkdown}true{:/} | {::nomarkdown}PatchVersion ^ ClientVersion{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}