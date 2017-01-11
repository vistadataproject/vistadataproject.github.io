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


### Method description

 property | value 
--- | --- 
 Method comment | RPC to resolve Dx Text for PCE view

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| NARR | LITERAL |  | true | This is the narrative entered for the Dx. | 
| CODE | LITERAL |  | true | This is the ICD code. | 




 ###### Generated on January 11th 2017, 6:39:43 am