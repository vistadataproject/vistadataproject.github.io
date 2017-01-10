---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWDPS32 DLGSLCT 

 property | value 
--- | --- 
 label | ORWDPS32 DLGSLCT
 tag | DLGSLCT
 routine | [ORWDPS32](http://code.osehra.org/dox/Routine_ORWDPS32_source.html)
 return value type | ARRAY
 description | Returns default lists for order dialogs in CPRS GUI.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PSTYPE | LITERAL |  | true | Code to determine the Dialog Type | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL |  | true |  | 
| vs:Input_Parameter-8994_02 | LOCIEN | LITERAL |  | true | This will be set to the patient inpatient location IEN from file 44. | 