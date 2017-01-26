---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SDOE GET PROVIDERS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SDOE GET PROVIDERS{:/}
 tag | {::nomarkdown}GETPRV{:/}
 routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This Remote Procedure Call (RPC) returns a subscripted array of providersfor an encounter.Note:For encounters before 10/1/96, only scheduling data in theOUTPATIENT PROVIDER (#409.44) file may exist. It will onlyexist if the site required provider as part of the check out process. This RPC will attempt to find this 'old' data, reformat thedata to meet the V PROVIDER structure and return the list ofproviders as described above. (Only the provider internal entrynumber is available for 'old' encounters.){:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ENCOUNTER IEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal entry number of an entry in the OUTPATIENTENCOUNTER [#409.68 - ^SCE] file.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 26th 2017, 2:53:13 am</p>{:/}