---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWPCE GET DX TEXT 

 property | value 
--- | --- 
 label | ORWPCE GET DX TEXT
 tag | GETDXTXT
 routine | [ORWPCE3](http://code.osehra.org/dox/Routine_ORWPCE3_source.html)
 return value type | SINGLE VALUE
 description | Resolves the preferred expanded form of the Diagnosis text for the encounter pane on the notes tab.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | NARR | LITERAL |  | true | This is the narrative entered for the Dx. | 
| vs:Input_Parameter-8994_02 | CODE | LITERAL |  | true | This is the ICD code. | 