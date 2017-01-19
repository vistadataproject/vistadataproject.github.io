---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIC DPT INP INFO 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIC DPT INP INFO{:/}
 tag | {::nomarkdown}IN{:/}
 routine | [DSICDPT](http://code.osehra.org/dox/Routine_DSICDPT_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This with return information about an admission event.  This RPC is a wrapper around the IN5^VADPT API.  If you pass in a date, then the data related to that date and admission will be returned,  If no date is passed, then get inpatient status as of NOW. For more detailed description, see IN^DSICDPT routine.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}15{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the pointer value to the PATIENT file (i.e., DFN){:/} | 
| {::nomarkdown}DATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}13{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the Fileman format, date only, for which you wish to retrieve inpatient movement information.  If it is not passed, then the program will use NOW as the date.{:/} | 
| {::nomarkdown}LODGE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is a Boolean flag (1 or 0 or <null>).  If LODGE=1 then allow for lodger type admissions.  If not, exclude lodger type admissions from the search.  The default value is <null>, exclude lodger admisssions.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 8:55:11 am</p>{:/}