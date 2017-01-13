---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV ONE LOC APPOINTMENTS 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIV ONE LOC APPOINTMENTS{:/}
 tag | {::nomarkdown}REQONE{:/}
 routine | [DSIVIC1](http://code.osehra.org/dox/Routine_DSIVIC1_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Request all appointments for one hospital location, with insuranceflag.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}LOCIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Hospital Location IEN.{:/} | 
| {::nomarkdown}SDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}FileMan start date.time (optional).{:/} | 
| {::nomarkdown}EDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}FileMan end date.time (optional).{:/} | 
| {::nomarkdown}DAYS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Number of days prior to today for last verified check (default=182).{:/} | 
| {::nomarkdown}SCREEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the type of appointment to screen out.  1=checked in (which also screens checked out appts by default) or 2=checked out.{:/} | 
| {::nomarkdown}BUF{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This field can be set to 1 to screen out (not return) appointments if there's an existing buffer entry for that patient.{:/} | 
| {::nomarkdown}NUMS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}9{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the number of records to return for each call.{:/} | 
| {::nomarkdown}MORE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains a 1 if this is a second call to the rpc to get more records.  Used with the NUMS field to get sets of data and not overwhelm the broker or timeout.{:/} | 




 Generated on January 13th 2017, 6:24:32 am