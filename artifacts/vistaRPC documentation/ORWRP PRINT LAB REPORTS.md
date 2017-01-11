---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWRP PRINT LAB REPORTS 

 property | value 
--- | --- 
 label | ORWRP PRINT LAB REPORTS
 tag | PRINT
 routine | [ORWRPL](http://code.osehra.org/dox/Routine_ORWRPL_source.html)
 return value type | SINGLE VALUE
 description | This rpc is used to print a report on the Labs tabin CPRS.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DEVICE | LITERAL | 100 | true | Name of the device where the report should print.Format: <device name> ; <right margin> ; <page length>Right margin and page length are optional. | 
| DFN | LITERAL | 20 | true | Internal entry number of entry in the Patient file. | 
| REPORT ID | LITERAL | 20 | true | Identification number of the desired report. | 
| DATE RANGE | LITERAL | 5 | true | This parameter indicates the number of days from TODAYthat the report should search for information. | 