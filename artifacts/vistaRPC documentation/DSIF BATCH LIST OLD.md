---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF BATCH LIST OLD 

 property | value 
--- | --- 
 label | DSIF BATCH LIST OLD
 tag | GETOLD
 routine | [DSIFLRJ](http://code.osehra.org/dox/Routine_DSIFLRJ_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC traverses through both inpatient and outpatient records and retrieves a list of batches that are in purgatory.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FBFROM | LITERAL | 7 | true | FBFROM - From date (optional) | 
| vs:Input_Parameter-8994_02 | FBTO | LITERAL | 7 | true | FBTO - To date (optional) | 