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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PSTYPE | LITERAL |  | true | Code to determine the Dialog Type | 
| DFN | LITERAL |  | true |  | 
| LOCIEN | LITERAL |  | true | This will be set to the patient inpatient location IEN from file 44. | 