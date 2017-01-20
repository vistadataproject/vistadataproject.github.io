---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SDOE GET PRIMARY DIAGNOSIS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SDOE GET PRIMARY DIAGNOSIS{:/}
 tag | {::nomarkdown}GETPDX{:/}
 routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This Remote Procedure Call (RPC) returns the internal entry numberof the primary diagnosis code (ICD) for an encounter. Note: For encounters before 10/1/96, this RPC will always return 0.This primary diagnosis was not retrieved nor stored by the systemfor these 'old' encounters.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ENCOUNTER IEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number of an entry in the OUTPATIENTENCOUNTER [#409.68 - ^SCE] file.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:06 am</p>{:/}