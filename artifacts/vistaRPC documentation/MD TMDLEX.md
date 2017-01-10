---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MD TMDLEX 

 property | value 
--- | --- 
 label | MD TMDLEX
 tag | LEX
 routine | [MDRPCW1](http://code.osehra.org/dox/Routine_MDRPCW1_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC will return a list of CPT or ICD for a search typed in.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | MDSRCH | REFERENCE |  | true | This is the text typed in for the look-up. | 
| vs:Input_Parameter-8994_02 | MDAPP | REFERENCE |  | true | This is the application indicator.  It is either \CPT\ or \ICD\. | 
| vs:Input_Parameter-8994_02 | STUDY | LITERAL |  | true | This is a required field to obtain the Patient Study # which will be used to check the PCE visit date. | 