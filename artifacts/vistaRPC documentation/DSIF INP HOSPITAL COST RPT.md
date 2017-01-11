---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF INP HOSPITAL COST RPT 

 property | value 
--- | --- 
 label | DSIF INP HOSPITAL COST RPT
 tag | COSTRPT
 routine | [DSIFRPT0](http://code.osehra.org/dox/Routine_DSIFRPT0_source.html)
 return value type | GLOBAL ARRAY
 description | This is an RPC version of the CIVIL HOSPITAL COST REPORT as found in routines FBCHCR anc FBCHCR1.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| BEGDATE | LITERAL | 7 | true | Begining Date (Required : FileMan format) | 
| ENDDATE | LITERAL | 7 | true | Ending Date (Required : FileMan format) | 
| FBRT | LITERAL | 1 | true | Report Type (Optional : D = Detailed, S = Summary, Default = Summary) | 