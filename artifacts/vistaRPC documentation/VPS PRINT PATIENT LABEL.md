---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; VPS PRINT PATIENT LABEL 

 property | value 
--- | --- 
 label | VPS PRINT PATIENT LABEL
 tag | PRINT
 routine | [VPSRLBLS](http://code.osehra.org/dox/Routine_VPSRLBLS_source.html)
 return value type | SINGLE VALUE
 description | This RPC prints patient label using the standard VistAPrint Patient Label routine (DGPLBL).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| VPSLOC | LITERAL | 1 | true | This is a flag to indicate to print routine to include ward locationor not. | 
| VPSLBCNT | LITERAL | 3 | true | This is label count to indicate to print routine how many duplicatelabels to print for the patient. | 
| VPSLPL | LITERAL | 2 | true | This is Lines/Label to indicate to print routine the maximum lines to print for each label. | 
| VPSIO | LITERAL | 50 | true | This is the device name where the label will be printed to. | 
| VPSTYP | LITERAL | 7 | true | Patient ID Type. Valid Input parameter: DFN,SSN,ICN,VIC/CAC | 
| VPSNUM | LITERAL | 50 | true | Patient ID. This could be SSN, DFN, VIC/CAC, ICN | 




 Generated on January 11th 2017, 7:15:04 am