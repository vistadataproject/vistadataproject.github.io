---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWRA PRINT REPORT 

 property | value 
--- | --- 
 label | ORWRA PRINT REPORT
 tag | PRINT
 routine | [ORWRAP](http://code.osehra.org/dox/Routine_ORWRAP_source.html)
 return value type | SINGLE VALUE
 description | This rpc is used to print an imaging report on the Imaging tabin CPRS.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DEVICE | LITERAL | 100 | true | Name of the device where the report should print.Format: <device name> ; <right margin> ; <page length>Right margin and page length are optional. | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 20 | true | Internal entry number of entry in the Patient file. | 
| vs:Input_Parameter-8994_02 | EXAM ID | LITERAL | 20 | true | Identification number of the imaging exam. | 