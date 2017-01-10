---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV ONE LOC APPOINTMENTS 

 property | value 
--- | --- 
 label | DSIV ONE LOC APPOINTMENTS
 tag | REQONE
 routine | [DSIVIC1](http://code.osehra.org/dox/Routine_DSIVIC1_source.html)
 return value type | GLOBAL ARRAY
 description | Request all appointments for one hospital location, with insuranceflag.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | LOCIEN | LITERAL | 16 | true | Hospital Location IEN. | 
| vs:Input_Parameter-8994_02 | SDT | LITERAL | 16 | true | FileMan start date.time (optional). | 
| vs:Input_Parameter-8994_02 | EDT | LITERAL | 16 | true | FileMan end date.time (optional). | 
| vs:Input_Parameter-8994_02 | DAYS | LITERAL | 10 | true | Number of days prior to today for last verified check (default=182). | 
| vs:Input_Parameter-8994_02 | SCREEN | LITERAL | 1 | true | Contains the type of appointment to screen out.  1=checked in (which also screens checked out appts by default) or 2=checked out. | 
| vs:Input_Parameter-8994_02 | BUF | LITERAL | 1 | true | This field can be set to 1 to screen out (not return) appointments if there's an existing buffer entry for that patient. | 
| vs:Input_Parameter-8994_02 | NUMS | LITERAL | 9 | true | Contains the number of records to return for each call. | 
| vs:Input_Parameter-8994_02 | MORE | LITERAL | 1 | true | Contains a 1 if this is a second call to the rpc to get more records.  Used with the NUMS field to get sets of data and not overwhelm the broker or timeout. | 