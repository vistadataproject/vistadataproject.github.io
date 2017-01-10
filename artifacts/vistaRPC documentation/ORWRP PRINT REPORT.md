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

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DEVICE | LITERAL | 100 | true | Name of the device where the report should print.Format: <device name> ; <right margin> ; <page length>Right margin and page length are optional. | 
| vs:Input_Parameter-8994_02 | DFN | LITERAL | 20 | true | Internal entry number of entry in the Patient file. | 
| vs:Input_Parameter-8994_02 | REPORT ID | LITERAL | 20 | true | Identification number of the desired report. | 
| vs:Input_Parameter-8994_02 | HEALTH SUMMARY TYPE | LITERAL | 20 | true | Internal entry number of entry in the HEALTH SUMMARY TYPEfile.This parameter is only required for Health Summary reports. | 
| vs:Input_Parameter-8994_02 | DATE RANGE | LITERAL | 5 | true | This parameter indicates the number of days from TODAYthat the report should search for information.This parameter is required for vital reports. | 
| vs:Input_Parameter-8994_02 | EXAM ID | LITERAL | 20 | true | Identification number of the exam. | 