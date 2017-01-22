---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC ICD9 GET DIAGNOSIS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC ICD9 GET DIAGNOSIS{:/}
 tag | {::nomarkdown}ICD9{:/}
 routine | [DSICDRG](http://code.osehra.org/dox/Routine_DSICDRG_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This will return specific information for a diagnosis code{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VICD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the ifn or .01 field value from the DIAGNOSIS file (#80){:/} | 
| {::nomarkdown}FLDS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a \^\-delimited list of field values you wish returned for adiagnosis code. Acceptable field numbers:  ien - return ifn to file 80  .01 - ICD9 NAME (diagnosis code)    3 - DIAGNOSIS (short description 2-30 char)    5 - MAJOR DIAGNOSTIC CATEGORY (external value from 80.3)   10 - DESCRIPTION (long description 1-245 char)  9.5 - USE ONLY WITH SEX (M, F, or <null>)   15 - AGE (N:newborn;P:pediatric;A:adult)  100 - INACTIVE (1 or <null>)  101 - UNACCEPTABLE AS PRINCIPAL DX (1 if not acceptable)  102 - INACTIVE DATE Default value:  ien^.01^3{:/} | 
| {::nomarkdown}CDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This date is optional.  It can be <null>, TODAY, NOW, or a internal Fileman format date.  Default value is TODAY.  This date will be used to check if the code was active as of that date. This parameter is not used at this time{:/} | 
| {::nomarkdown}SCR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a single or double character code used to screen out diagnoses.  SCR = \A\ - default value - return only active codes        \U\ - return codes which are acceptable as a principal diagnosis        \N\ - do not screen out any codes       \AU\ - return codes which are both active and acceptable as a              principal diagnosis{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}