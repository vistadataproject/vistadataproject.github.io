---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; ORWRA REPORT TEXT1 

 property | value 
--- | --- 
 label | ORWRA REPORT TEXT1
 tag | RPT1
 routine | [ORWRA](http://code.osehra.org/dox/Routine_ORWRA_source.html)
 return value type | GLOBAL ARRAY
 description | This remote procedure call returns an array containinga formattied imaging report. This array matches exactlythe report format on the roll 'n scroll version of CPRS.


### Method description

 property | value 
--- | --- 
 Method comment | return imaging report

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 20 | true | Internal entry number of patient in the Patient file [^DPT]. | 
| EXAMID | LITERAL | 20 | true | Imaging exam ID. Format: Inverse FM date/time of Exam_-_Case IENExample: 7049175.8893-1 | 




 ###### Generated on January 11th 2017, 6:39:43 am