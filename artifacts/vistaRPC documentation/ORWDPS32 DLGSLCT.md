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


### Method description

 property | value 
--- | --- 
 Method comment | return def lists for dialog
 Leading comment lines | PSTYPE: pharmacy type (U=unit dose, F=IV fluids, O=outpt)

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| PSTYPE | LITERAL |  | true | Code to determine the Dialog Type | 
| DFN | LITERAL |  | true |  | 
| LOCIEN | LITERAL |  | true | This will be set to the patient inpatient location IEN from file 44. | 




Generated on January 11th 2017, 6:34:23 am