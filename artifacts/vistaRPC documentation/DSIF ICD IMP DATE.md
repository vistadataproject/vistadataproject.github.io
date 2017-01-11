---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF ICD IMP DATE 

 property | value 
--- | --- 
 label | DSIF ICD IMP DATE
 tag | IMPDATE
 routine | [DSIFICD](http://code.osehra.org/dox/Routine_DSIFICD_source.html)
 return value type | SINGLE VALUE
 description | This RPC will retrieve the ICD code system implementation date.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DSIFSYS | LITERAL |  | true | This is the coding system abbreviation from VistA. This parameter is required.     Input:     DSIFSYS   Coding System               1 OR \ICD\ = ICD-9-CM              2 OR \ICP\ = ICD-9-PCS             30 OR \10D\ = ICD-10-CM             31 OR \10P\ = ICD-10-PCS | 




 Generated on January 11th 2017, 7:15:04 am