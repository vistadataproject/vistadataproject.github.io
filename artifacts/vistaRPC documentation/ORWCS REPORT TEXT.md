---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWCS REPORT TEXT 

 property | value 
--- | --- 
 label | ORWCS REPORT TEXT
 tag | RPT
 routine | [ORWCS](http://code.osehra.org/dox/Routine_ORWCS_source.html)
 return value type | GLOBAL ARRAY
 description | This remote procedure call returns an array containinga formattied consult report. This array matches exactlythe report format on the roll 'n scroll version of CPRS.


### Method description

 property | value 
--- | --- 
 Method comment | retrieve report text
 Leading comment lines | RPC: ORWCS REPORT TEXT,See RPC definition for details on input and output parameters

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 20 | true | Internal entry number of patient in the Patient file [^DPT]. | 
| CONSULT ID | LITERAL | 20 | true | Consult ID.Format: Internal entry number to REQUEST/CONSULTATION file (#123)Example: 1000 | 