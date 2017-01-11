---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWRP PRINT REPORT 

 property | value 
--- | --- 
 label | ORWRP PRINT REPORT
 tag | PRINT
 routine | [ORWRPP](http://code.osehra.org/dox/Routine_ORWRPP_source.html)
 return value type | SINGLE VALUE
 description | This rpc is used to print a report on the Report tabin CPRS.


### Method description

 property | value 
--- | --- 
 Method comment | print report entry point
 Leading comment lines | RPC: ORWRP PRINT REPORT,See RPC definition for details on input and output parameters

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DEVICE | LITERAL | 100 | true | Name of the device where the report should print.Format: <device name> ; <right margin> ; <page length>Right margin and page length are optional. | 
| DFN | LITERAL | 20 | true | Internal entry number of entry in the Patient file. | 
| REPORT ID | LITERAL | 20 | true | Identification number of the desired report. | 
| HEALTH SUMMARY TYPE | LITERAL | 20 | true | Internal entry number of entry in the HEALTH SUMMARY TYPEfile.This parameter is only required for Health Summary reports. | 
| DATE RANGE | LITERAL | 5 | true | This parameter indicates the number of days from TODAYthat the report should search for information.This parameter is required for vital reports. | 
| EXAM ID | LITERAL | 20 | true | Identification number of the exam. | 




Generated on January 11th 2017, 6:34:23 am