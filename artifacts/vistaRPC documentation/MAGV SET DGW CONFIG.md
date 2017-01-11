---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAGV SET DGW CONFIG 

 property | value 
--- | --- 
 label | MAGV SET DGW CONFIG
 tag | SETGWCFG
 routine | [MAGVDGWP](http://code.osehra.org/dox/Routine_MAGVDGWP_source.html)
 return value type | SINGLE VALUE
 description | Set DGW configuration settings in the MAGV GATEWAY CONFIGURATIONFile (#2006.9191).

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| HOSTNAME | LITERAL | 30 |  | NAME OF DICOM GATEWAY | 
| MAILGROUP | LITERAL |  |  | EMAIL ADDRESSEE | 
| POSTOFFICE | LITERAL | 30 |  | POST OFFICE SERVER | 
| POSTPORT | LITERAL | 5 |  | POST OFFICE EMAIL PORT | 
| IMPORTER | LITERAL | 3 |  | Indicator to determine if DGW is using the IMPORTER.Contents are YES or NO. | 
| LOCATION | LITERAL | 8 |  | DICOM GATEWAY LOCATION CODE(Site Location/Station number) | 