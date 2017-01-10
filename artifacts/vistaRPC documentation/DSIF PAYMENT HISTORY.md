---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF PAYMENT HISTORY 

 property | value 
--- | --- 
 label | DSIF PAYMENT HISTORY
 tag | LIST
 routine | [DSIFRPT2](http://code.osehra.org/dox/Routine_DSIFRPT2_source.html)
 return value type | GLOBAL ARRAY
 description | This is an RPC version of the LIST PAYMENT HISTORY option in the Fee Basis application.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 99 | true | This is the Internal Entry Number to the Patient File #2. | 