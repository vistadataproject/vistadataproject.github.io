---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORQPT TEAM PATIENTS 

 property | value 
--- | --- 
 label | ORQPT TEAM PATIENTS
 tag | TEAMPTS
 routine | [ORQPTQ1](http://code.osehra.org/dox/Routine_ORQPTQ1_source.html)
 return value type | ARRAY
 description | Function returns an array of patients on a team.


### Method description

 property | value 
--- | --- 
 Method comment | RETURN LIST OF PATIENTS IN A TEAM
 Leading comment lines | Also called under DBIA # 2692.,If TMPFLAG passed and = TRUE, code expects a "^TMP(xxx",global root string passed in ORY, and builds the returned ,list in that global instead of to a memory array.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| TEAM ID | LITERAL | 16 | true | The record number from the OE/RR Team File (#100.21). | 