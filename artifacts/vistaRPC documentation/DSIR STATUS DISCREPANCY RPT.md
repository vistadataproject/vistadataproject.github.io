---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIR STATUS DISCREPANCY RPT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIR STATUS DISCREPANCY RPT{:/}
 tag | {::nomarkdown}STATDISC{:/}
 routine | [DSIROIR2](http://code.osehra.org/dox/Routine_DSIROIR2_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This RPC returns data from the DSIR STATUS HISTORY file to review which request are being entered as closed on one day yet the status date is a previous date.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}START DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}FileMan format start date.{:/} | 
| {::nomarkdown}END DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}FileMan end date. Optional - defaults to current date.{:/} | 
| {::nomarkdown}CLERK(S){:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Array where each element is equal to the DUZ of selected clerks.  Optional - no entries passed will return all clerks for time period.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}