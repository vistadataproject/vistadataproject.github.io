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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL |  |  | DFN/Internal Number of Patient | 
| TITLE | LITERAL |  |  | TIU Document Definition | 
| VDT | LITERAL |  |  | Time/Date of Visit (Not used, leave blank) | 
| VLOC | LITERAL |  |  | Visit Location (Not used, leave blank) | 
| VSIT | LITERAL |  |  | Visit file number (Not used, leave blank) | 
| TIUX | LIST |  |  | Array containing field data and body document | 
| VSTR | LITERAL |  |  | Visit string (VLOC;VDT;VTYPE) | 
| SUPPRESS | LITERAL |  |  | Suppress execution of Commit Action? (Not used, leave blank) | 
| NOASF | LITERAL |  |  | Set Asave Cross-reference? (Not used, leave blank) | 
| DUZ | LITERAL |  |  | Internal ID of employee entering Progress Note | 
| SPNSIG | LITERAL |  |  | Electronic Signature Code of employee | 




 ###### Generated on January 11th 2017, 6:39:43 am