---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWRP PRINT REMOTE REPORT 

 property | value 
--- | --- 
 label | ORWRP PRINT REMOTE REPORT
 tag | REMOTE
 routine | [ORWRPP](http://code.osehra.org/dox/Routine_ORWRPP_source.html)
 return value type | SINGLE VALUE
 description |  This rpc is used to print a remote report on the Report tab in CPRS.


### Method description

 property | value 
--- | --- 
 Method comment | Print data for remote sites
 Leading comment lines | RPC: ORWRP PRINT REMOTE REPORT

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DEVICE | LITERAL | 100 | true |  Name of the device where the report should print. Format: <device name> ; <right margin> ; <page length> Right margin and page length are optional. | 
| DFN | LITERAL | 20 | true |  Internal entry number of entry in the Patient file. | 
| REPORT ID | LITERAL | 20 | true |  Identification number of the desired report. | 
| HANDLE | LIST |  |  | List of remote handles to print for. | 




Generated on January 11th 2017, 6:34:23 am