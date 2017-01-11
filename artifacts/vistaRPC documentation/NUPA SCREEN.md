---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; NUPA SCREEN 

 property | value 
--- | --- 
 label | NUPA SCREEN
 tag | SCREEN
 routine | [NUPABCL](http://code.osehra.org/dox/Routine_NUPABCL_source.html)
 return value type | SINGLE VALUE
 description | Allows M code to be executed from inside a Delphi program.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| CODE | LITERAL |  | true | Code to execute.  If you set variable NUPa to a result, it will be pulled back into the assessment GUI. Code can be: S NUPA=$$D(^DPT(DFN)) D TAG^ROUTINE | 