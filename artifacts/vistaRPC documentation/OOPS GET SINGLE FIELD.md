---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OOPS GET SINGLE FIELD 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OOPS GET SINGLE FIELD{:/}
 tag | {::nomarkdown}GETFLD{:/}
 routine | [OOPSGUI7](http://code.osehra.org/dox/Routine_OOPSGUI7_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This broker call will return a single data element from the file and field that is passed in as a parameter.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter is the internal record number of the file that the data elementwill be extracted from.{:/} | 
| {::nomarkdown}FLD{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}50{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter contains the file and field number where the data element shouldbe extracted from in the format FILE NUMBER^FIELD NUMBER.  An example wouldbe 2260^119.  This would 'pull' field 119 from the ASISTS Accident ReportingFile (#2260).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}