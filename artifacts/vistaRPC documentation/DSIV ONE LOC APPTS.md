---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV ONE LOC APPTS 

 property | value 
--- | --- 
 label | DSIV ONE LOC APPTS
 tag | RQONELOC
 routine | [DSIVIC5](http://code.osehra.org/dox/Routine_DSIVIC5_source.html)
 return value type | GLOBAL ARRAY
 description | Request all appointments for one hospital location with insurance flag, check-in user, check-out user, and manual patient flag.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MORE | LITERAL | 1 | true | Contains a 1 if this is a second call to the rpc to get more records.  Used with the NUMS field to get sets of data and not overwhelm the broker or timeout. | 
| LOCIEN | LITERAL | 16 | true | Hospital Location IEN | 
| SDT | LITERAL | 16 | true | FileMan Start date.time (optional) | 
| EDT | LITERAL | 16 | true | FileMan End date.time (optional) | 
| DAYS | LITERAL | 10 | true | Number of days prior to today for last verified check (default=182) | 
| SCREEN | LITERAL | 1 | true | Contains the type of appointment to screen out:  1=checked in (which also screens checked out appointments by default) or 2=checked out | 
| NUMS | LITERAL | 9 | true | Contains the number of records to return for each call. | 
| BUF | LITERAL | 1 | true | This field can be set to 1 to screen out (not return) appointments if there's an existing buffer entry for that patient. | 