---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF ADD PT 

 property | value 
--- | --- 
 label | DSIF ADD PT
 tag | ADD
 routine | [DSIFENA1](http://code.osehra.org/dox/Routine_DSIFENA1_source.html)
 return value type | SINGLE VALUE
 description | Used to add a patient to the Fee Basis Patient file.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 55 | true | Pass in Patient File IEN (file #2) | 