---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ROR PATIENT GET DATA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ROR PATIENT GET DATA{:/}
 tag | {::nomarkdown}GETPTDAT{:/}
 routine | [RORRP021](http://code.osehra.org/dox/Routine_RORRP021_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}The ROR GET PATIENT DATA remote procedure returns patient's data from the PATIENT file and (optionally) the registry record.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIEN{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}A valid patient IEN (DFN) should be assigned to the PATIEN parameter.{:/} | 
| {::nomarkdown}FLAGS{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}Flags that control the execution (can be combined):   A  Load the patient's address  E  Load the ethnicity information  L  Load values of the registry local fields  R  Load the race information  S  Load the patient's selection rules The \L\ and \S\ flags require the REGIEN parameter. Otherwise, they areignored.{:/} | 
| {::nomarkdown}REGIEN{:/} | {::nomarkdown}LITERAL{:/} |  |  | {::nomarkdown}The REGIEN parameter should contain a valid registry IEN (IEN of theregistry parameters record in the ROR REGISTRY PARAMETERS file #798.1). If this parameter is defined and its value is greater than 0 then the\PRD\ segment with the basic patient's registry data will be returned.If the patient is not in the registry then an empty \PRD\ segment willbe returned anyway.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}