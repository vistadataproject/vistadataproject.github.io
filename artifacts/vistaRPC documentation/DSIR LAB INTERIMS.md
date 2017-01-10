---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR LAB INTERIMS 

 property | value 
--- | --- 
 label | DSIR LAB INTERIMS
 tag | INTERIMS
 routine | [DSIROI1](http://code.osehra.org/dox/Routine_DSIROI1_source.html)
 return value type | GLOBAL ARRAY
 description | 

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 50 | true | DFN - Patient Identifier | 
| vs:Input_Parameter-8994_02 | DATE1 | LITERAL | 7 | true | DATE1 - Start date in FILEMAN format | 
| vs:Input_Parameter-8994_02 | DATE2 | LITERAL | 7 | true | DATE2 - End date in FILEMAN format | 
| vs:Input_Parameter-8994_02 | ORTESTS | LIST |  | true | ORTESTS - List of tests to look up | 