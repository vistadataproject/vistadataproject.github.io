---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SDOE GET PROVIDERS 

 property | value 
--- | --- 
 label | SDOE GET PROVIDERS
 tag | GETPRV
 routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
 return value type | ARRAY
 description | This Remote Procedure Call (RPC) returns a subscripted array of providersfor an encounter.Note:For encounters before 10/1/96, only scheduling data in theOUTPATIENT PROVIDER (#409.44) file may exist. It will onlyexist if the site required provider as part of the check out process. This RPC will attempt to find this 'old' data, reformat thedata to meet the V PROVIDER structure and return the list ofproviders as described above. (Only the provider internal entrynumber is available for 'old' encounters.)

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | ENCOUNTER IEN | LITERAL |  | true | This is the internal entry number of an entry in the OUTPATIENTENCOUNTER [#409.68 - ^SCE] file. | 