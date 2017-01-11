---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC ICD9 GET DIAGNOSIS 

 property | value 
--- | --- 
 label | DSIC ICD9 GET DIAGNOSIS
 tag | ICD9
 routine | [DSICDRG](http://code.osehra.org/dox/Routine_DSICDRG_source.html)
 return value type | SINGLE VALUE
 description | This will return specific information for a diagnosis code

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| VICD | LITERAL | 7 | true | This is the ifn or .01 field value from the DIAGNOSIS file (#80) | 
| FLDS | LITERAL | 50 | true | This is a \^\-delimited list of field values you wish returned for adiagnosis code. Acceptable field numbers:  ien - return ifn to file 80  .01 - ICD9 NAME (diagnosis code)    3 - DIAGNOSIS (short description 2-30 char)    5 - MAJOR DIAGNOSTIC CATEGORY (external value from 80.3)   10 - DESCRIPTION (long description 1-245 char)  9.5 - USE ONLY WITH SEX (M, F, or <null>)   15 - AGE (N:newborn;P:pediatric;A:adult)  100 - INACTIVE (1 or <null>)  101 - UNACCEPTABLE AS PRINCIPAL DX (1 if not acceptable)  102 - INACTIVE DATE Default value:  ien^.01^3 | 
| CDT | LITERAL | 14 | true | This date is optional.  It can be <null>, TODAY, NOW, or a internal Fileman format date.  Default value is TODAY.  This date will be used to check if the code was active as of that date. This parameter is not used at this time | 
| SCR | LITERAL | 2 | true | This is a single or double character code used to screen out diagnoses.  SCR = \A\ - default value - return only active codes        \U\ - return codes which are acceptable as a principal diagnosis        \N\ - do not screen out any codes       \AU\ - return codes which are both active and acceptable as a              principal diagnosis | 




 Generated on January 11th 2017, 7:15:04 am