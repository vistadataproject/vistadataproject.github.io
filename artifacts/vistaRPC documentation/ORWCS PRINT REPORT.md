---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWCS PRINT REPORT 

 property | value 
--- | --- 
 label | ORWCS PRINT REPORT
 tag | PRINT
 routine | [ORWCSP](http://code.osehra.org/dox/Routine_ORWCSP_source.html)
 return value type | SINGLE VALUE
 description | This rpc is used to print a consult report on the Consult tabin CPRS.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DEVICE | LITERAL | 100 | true | Name of the device where the report should print.Format: <device name> ; <right margin> ; <page length>Right margin and page length are optional. | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 20 | true | Internal entry number of entry in the Patient file. | 
| vs:Input_Parameter-8994_02 | CONSULT ID | LITERAL | 20 | true | Identification number of the consult. | 