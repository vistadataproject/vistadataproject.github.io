---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORAMX PCESET 

 property | value 
--- | --- 
 label | ORAMX PCESET
 tag | PCESET
 routine | [ORAMX](http://code.osehra.org/dox/Routine_ORAMX_source.html)
 return value type | SINGLE VALUE
 description | Checks for service connection, etc, for PCE data call or files PCE data.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL |  |  | The IEN of the Patient in the Patient File (#2). | 
| vs:Input_Parameter-8994_02 | DATA1 | LITERAL |  |  | Data string from the Anticoagulation Management Program. | 
| vs:Input_Parameter-8994_02 | HOSLOC | LITERAL |  |  | Visit location from the Hospital Location File. | 