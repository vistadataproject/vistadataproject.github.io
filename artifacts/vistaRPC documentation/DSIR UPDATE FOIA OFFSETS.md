---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR UPDATE FOIA OFFSETS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIR UPDATE FOIA OFFSETS{:/}
 tag | {::nomarkdown}MANUFOIA{:/}
 routine | [DSIROI8](http://code.osehra.org/dox/Routine_DSIROI8_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC updates the manually entered offsets for the annual FOIA report.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FOIA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the internal number from file 19620.3.{:/} | 
| {::nomarkdown}DATA{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is an array '^' delimited containing the following:         Field Number (File 19620.3) ^ Numeric Value to store Field numbers must be 100.02 thru 137.02 and all .02, the .01 fields are populated by the annual FOIA report.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}