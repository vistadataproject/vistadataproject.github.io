---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIRPARM DELETE PARM_PO_SCL 

 property | value 
--- | --- 
 label | DSIRPARM DELETE PARM_PO_SCL
 tag | DELETE
 routine | [DSIRPARM](http://code.osehra.org/dox/Routine_DSIRPARM_source.html)
 return value type | SINGLE VALUE
 description | This RPC will delete entries in files 19620.701 (DSIR FACILITY PARAMETERS), 19620.702 (DSIR ROI PRINT ORDER) or 19620.703 (DSIR SENSITIVE CLINIC) based on the file specified in the second input parameter.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| IEN | LITERAL | 99 | true | IEN to file specified in FIL parameter - Required | 
| FIL | LITERAL | 9 | true | Decimal value of the file to delete entry - Required        19620.701 = DSIR FACILITY PARAMETERS        19620.702 = DSIR ROI PRINT ORDER        19620.703 = DSIR SENSITIVE CLINIC | 