---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQQCN RECEIVE 

 property | value 
--- | --- 
 label | ORQQCN RECEIVE
 tag | RC
 routine | [ORQQCN1](http://code.osehra.org/dox/Routine_ORQQCN1_source.html)
 return value type | SINGLE VALUE
 description | Test version of RECEIVE CONSULT for use with GUI.  (REV - 8/22/97)

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | CONSULT ID | LITERAL | 16 | true | Consult IEN from Consults file (123). | 
| vs:Input_Parameter-8994_02 | CONSULT RECEIVER | LITERAL | 16 | true | Person receiving the consult, not necessarily the enterer of the action.Pointer to NEW PERSON file (200). | 