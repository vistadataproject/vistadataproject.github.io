---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWLR CUMULATIVE REPORT 

 property | value 
--- | --- 
 label | ORWLR CUMULATIVE REPORT
 tag | CUM
 routine | [ORWLR](http://code.osehra.org/dox/Routine_ORWLR_source.html)
 return value type | GLOBAL ARRAY
 description | This call returns an up to date laboratory cumulative report for a given patient.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 30 | true | This parameter identifies the patient for whom the lab cumulative report should be obtained. | 