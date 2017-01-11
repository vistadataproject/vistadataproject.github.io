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


### Method description

 property | value 
--- | --- 
 Method comment | print report entry point
 Leading comment lines | RPC: ORWCS PRINT REPORT,See RPC definition for details on input and output parameters

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DEVICE | LITERAL | 100 | true | Name of the device where the report should print.Format: <device name> ; <right margin> ; <page length>Right margin and page length are optional. | 
| DFN | LITERAL | 20 | true | Internal entry number of entry in the Patient file. | 
| CONSULT ID | LITERAL | 20 | true | Identification number of the consult. | 




 ###### Generated on January 11th 2017, 6:39:42 am