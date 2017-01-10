---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV EXCEPTION REPORT 

 property | value 
--- | --- 
 label | DSIV EXCEPTION REPORT
 tag | RRPT
 routine | [DSIVICR2](http://code.osehra.org/dox/Routine_DSIVICR2_source.html)
 return value type | GLOBAL ARRAY
 description | Retrieves ICB Exception data from 19625.1.  A nightly job queued from option DSIV NIGHTLY REPORT processes the report - this rpc now just returns the data.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | SDT | LITERAL | 30 | true | Contains the start date for the report.  This is the report date in file 19625.1.  Since reports are run each night, it is the same as the appointment date. | 
| vs:Input_Parameter-8994_02 | EDT | LITERAL | 30 | true | Contains the end date for the report.  Defaults to current date if not sent. | 
| vs:Input_Parameter-8994_02 | MORE | LITERAL | 3 | true | Contains a flag to denote recursive calls to get the Exception Report data.  MORE=0 is the starting condition (start at the start date in parameter 1), MORE=1 is to continue getting the records until the value ~END~ is received.  The number of records returned for each call is based on the DSIV MAX NUM ENTRIES parameter.  The MORE parameter and recursive calling to the rpc prevents network timeouts when a lot of data is being returned (e.g. one month of Exception data). | 
| vs:Input_Parameter-8994_02 | LOCS | LIST | 50 | true | Contains an array of clinics to include or exclude from the report.  The array is in the format: LOCS(1)=\INCLUDE\   (or \EXCLUDE\ to exclude the clinics) LOCS(n)=228  (clinic IEN from file 44) | 