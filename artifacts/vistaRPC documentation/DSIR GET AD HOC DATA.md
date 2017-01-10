---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIR GET AD HOC DATA 

 property | value 
--- | --- 
 label | DSIR GET AD HOC DATA
 tag | RPTDATA
 routine | [DSIROIA2](http://code.osehra.org/dox/Routine_DSIROIA2_source.html)
 return value type | GLOBAL ARRAY
 description | GET DATA FOR AN AD HOC REPORT

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | INARRAY | LIST |  | true | Input Parameter(s) - ARRAY AS FOLLOWS: \F1_IEN^F2_IEN^...^Fn_IEN FILTER/SELECTION FIELDS (OPTIONAL) \F1\^F1_IEN^F1_VALUE \F2\^F2_IEN^F1_VALUE \F3\^F3_IEN^F1_VALUE DATE RANGE FIELDS (OPTIONAL) \R1\^R1_IEN^F1_VALUE1^F1_VALUE2 \R2\^R2_IEN^R2_VALUE2^R2_VALUE2^ANDOR (A=AND O=OR DATE RANGES) SORT FIELDS (OPTIONAL) \S1\^S1_IEN^[\A\|\D\] (\A - ASCENDING IS THE DEFAULT, \D\ - DESCENDING) \S2\^S2_IEN^[\A\|\D\] (\A - ASCENDING IS THE DEFAULT, \D\ - DESCENDING) | 