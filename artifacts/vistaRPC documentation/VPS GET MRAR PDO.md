---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; VPS GET MRAR PDO 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}VPS GET MRAR PDO{:/}
 tag | {::nomarkdown}GET{:/}
 routine | [VPSPDO1](http://code.osehra.org/dox/Routine_VPSPDO1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Software that supports this procedure will build a global array with each subscript in the array assigned a line of text representing clinical data (allergy and medications) associated with the results of a Medication Review Allergy Review with the veteran.  This is referred to as PDO outputand will be presented as a note on the STAFF-FACING interface on Vetlink.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}VPSNUM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient ID. This parameter value could be SSN, DFN, ICN, or VIC/CAC based on Patient ID Type.{:/} | 
| {::nomarkdown}VPSTYP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient ID Type. Valid Value is SSN, DFN, ICN, or VIC/CAC{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}