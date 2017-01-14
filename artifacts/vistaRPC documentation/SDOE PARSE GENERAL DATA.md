---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; SDOE PARSE GENERAL DATA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}SDOE PARSE GENERAL DATA{:/}
 tag | {::nomarkdown}PARSE{:/}
 routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This Remote Procedure Call (RPC) will parse the data returned bythe 'SDOE GET GENERAL DATA' RPC into individual field nodes. {:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}ENCOUNTER DATA{:/} | {::nomarkdown}LIST{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}This array contains subscripts that correspond to each node of data foran Outpatient Encounter entry.Note: Currently (7/97) only the zeroth node is returned. Also, onlyfields .01 thru .08 and .1 thru .13 of the zeroth are returned.Other nodes and fields are not supported.For detail information regarding the fields, see data dictionary forthe Outpatient Encounter file (#409.68).{:/} | 
| {::nomarkdown}ENCOUNTER PARSE FORMAT{:/} | {::nomarkdown}LITERAL{:/} |  | {::nomarkdown}true{:/} | {::nomarkdown}Defines format for parsed data.Valid Values:-------------      INTERNAL - use internal format       EXTERNAL - external/display format.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}