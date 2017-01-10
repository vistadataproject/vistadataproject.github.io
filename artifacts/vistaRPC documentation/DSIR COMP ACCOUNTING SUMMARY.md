---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR COMP ACCOUNTING SUMMARY 

 property | value 
--- | --- 
 label | DSIR COMP ACCOUNTING SUMMARY
 tag | CAS
 routine | [DSIROIR1](http://code.osehra.org/dox/Routine_DSIROIR1_source.html)
 return value type | GLOBAL ARRAY
 description | This RPC returns a list of all internal entry numbers from file 19620 for a specified patient.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | PATIENT | LITERAL | 99 | true | The DFN of the selected patient. | 
| vs:Input_Parameter-8994_02 | START DATE | LITERAL | 7 | true | This is the FileMan date to start the report.  If it is null the routine will start at the begining. | 
| vs:Input_Parameter-8994_02 | END DATE | LITERAL | 7 | true | This is the FileMan date the report should stop counting.  If null the report will count all records from the start date thru the current date. | 