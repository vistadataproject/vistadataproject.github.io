---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; SPN PROGRESS NOTES WRAPPER 

 property | value 
--- | --- 
 label | SPN PROGRESS NOTES WRAPPER
 tag | COL
 routine | [SPNJRPPN](http://code.osehra.org/dox/Routine_SPNJRPPN_source.html)
 return value type | SINGLE VALUE
 description | Submits progress note to VistA and returns a confirmation or error message, if problem occurred.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL |  |  | DFN/Internal Number of Patient | 
| vs:Input_Parameter-8994_02 | TITLE | LITERAL |  |  | TIU Document Definition | 
| vs:Input_Parameter-8994_02 | VDT | LITERAL |  |  | Time/Date of Visit (Not used, leave blank) | 
| vs:Input_Parameter-8994_02 | VLOC | LITERAL |  |  | Visit Location (Not used, leave blank) | 
| vs:Input_Parameter-8994_02 | VSIT | LITERAL |  |  | Visit file number (Not used, leave blank) | 
| vs:Input_Parameter-8994_02 | TIUX | LIST |  |  | Array containing field data and body document | 
| vs:Input_Parameter-8994_02 | VSTR | LITERAL |  |  | Visit string (VLOC;VDT;VTYPE) | 
| vs:Input_Parameter-8994_02 | SUPPRESS | LITERAL |  |  | Suppress execution of Commit Action? (Not used, leave blank) | 
| vs:Input_Parameter-8994_02 | NOASF | LITERAL |  |  | Set Asave Cross-reference? (Not used, leave blank) | 
| vs:Input_Parameter-8994_02 | DUZ | LITERAL |  |  | Internal ID of employee entering Progress Note | 
| vs:Input_Parameter-8994_02 | SPNSIG | LITERAL |  |  | Electronic Signature Code of employee | 