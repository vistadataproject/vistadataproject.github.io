---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; GMV CLOSEST READING 

 property | value 
--- | --- 
 label | {::nomarkdown}GMV CLOSEST READING{:/}
 tag | {::nomarkdown}CLOSEST{:/}
 routine | [GMVGETD](http://code.osehra.org/dox/Routine_GMVGETD_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This remote procedure call returns the observation date/time and reading of the record closest to the date/time specified for the patient and vitaltype.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | GMV CLOSEST READING [RPC entry point]
 Leading comment lines | {::nomarkdown}Get nearest reading to date(/time) provided<br/>Input:  GMVDFN - DFN (required)<br/>GMVDT - FileMan date/time (optional)<br/>Default is NOW<br/>GMVT - Vital Type abbreviation, FILE 120.51, Field 1 (required)<br/>GMVFLAG - Where to look (optional)<br/>0 = either before or after GMVDT  (default)<br/>1 = before GMVDT<br/>2 = after GMVDT<br/>Output: RESULT - piece1^piece2<br/>where piece1 = date/time of reading (FileMan internal format)<br/>piece2 = reading<br/>If no records found piece 1 = -2<br/>and piece 2 = message text                     <br/>If an error was encountered piece1 = -1<br/>and piece2 = error message{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}GMVDFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}12{:/} | {::nomarkdown}true{:/} | {::nomarkdown}A pointer to the Patient (#2) file (i.e., DFN).{:/} | 
| {::nomarkdown}GMVDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}14{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The date/time to search from. The default is NOW.{:/} | 
| {::nomarkdown}GMVT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}5{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The vital type abbreviation as it appears in FILE 120.51, Field 1 (e.g., WT).{:/} | 
| {::nomarkdown}GMVFLAG{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}A flag to indicate if the search should look before or after the date/timespecified in the GMVDT value where 1 indicates before, 2 indicates afterand 0 indicates either direction.{:/} | 




 Generated on January 13th 2017, 6:44:48 am