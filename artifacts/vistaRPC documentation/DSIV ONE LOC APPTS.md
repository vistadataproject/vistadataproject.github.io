---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIV ONE LOC APPTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIV ONE LOC APPTS{:/}
 tag | {::nomarkdown}RQONELOC{:/}
 routine | [DSIVIC5](http://code.osehra.org/dox/Routine_DSIVIC5_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Request all appointments for one hospital location with insurance flag, check-in user, check-out user, and manual patient flag.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MORE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains a 1 if this is a second call to the rpc to get more records.  Used with the NUMS field to get sets of data and not overwhelm the broker or timeout.{:/} | 
| {::nomarkdown}LOCIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Hospital Location IEN{:/} | 
| {::nomarkdown}SDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}FileMan Start date.time (optional){:/} | 
| {::nomarkdown}EDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}FileMan End date.time (optional){:/} | 
| {::nomarkdown}DAYS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Number of days prior to today for last verified check (default=182){:/} | 
| {::nomarkdown}SCREEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the type of appointment to screen out:  1=checked in (which also screens checked out appointments by default) or 2=checked out{:/} | 
| {::nomarkdown}NUMS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}9{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contains the number of records to return for each call.{:/} | 
| {::nomarkdown}BUF{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This field can be set to 1 to screen out (not return) appointments if there's an existing buffer entry for that patient.{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:30:12 am</p>{:/}