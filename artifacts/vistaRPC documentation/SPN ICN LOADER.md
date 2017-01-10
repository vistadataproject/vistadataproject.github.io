---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN ICN LOADER 

 property | value 
--- | --- 
 label | SPN ICN LOADER
 tag | COL
 routine | [SPNJRPIL](http://code.osehra.org/dox/Routine_SPNJRPIL_source.html)
 return value type | GLOBAL ARRAY
 description | Returns the appropriate ICNs for every DFN that is requested. 

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFNLST | LIST |  |  | Patients DFN in list format (DFN^DFN^DFN^DFN^DFN...) | 