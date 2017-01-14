---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OOPS EDIT SITEPAR STATION 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OOPS EDIT SITEPAR STATION{:/}
 tag | {::nomarkdown}SITEPEDT{:/}
 routine | [OOPSGUI6](http://code.osehra.org/dox/Routine_OOPSGUI6_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This broker call will either add a new Station subfile to the Site parameterfile or will allow for editing an existing Station subfile.  If the StationIEN is passed in the INPUT parameter, the record will be edited.  If a StationIEN is not passed in the input parameter, a new record will be created.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INPUT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter (INPUT) contains the required IENs for filing a record.  If theStation IEN is passed in the record will be edited, if no Station IEN ispresent, a new Station subrecord will be created.  The format is:SITE IEN^SUBFILE #^STATION IEN{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This parameter contains the data to be filed in the Station subfile.{:/} | 
| {::nomarkdown}FORM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} |  | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:46:15 am</p>{:/}