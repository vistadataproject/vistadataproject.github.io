---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIV REPORT QUEUE 

 property | value 
--- | --- 
 label | DSIV REPORT QUEUE
 tag | PRPT
 routine | [DSIVICR](http://code.osehra.org/dox/Routine_DSIVICR_source.html)
 return value type | SINGLE VALUE
 description | Queues up the report data from file 19625 for billing reports.  

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | DSIVHNDL | LITERAL | 50 | true | Contains the handle to \find\ the report in the ^XTMP global after it has been queued and run by Taskman. | 
| vs:Input_Parameter-8994_02 | DSIVRPT | LITERAL | 30 | true | Contains the ICB report the user has requested. | 
| vs:Input_Parameter-8994_02 | DATA | LIST | 250 | true | Contains the parameters to search for data:   DATA(\SDT\)=fileman start dt   DATA(\EDT\)=fileman end dt   DATA(\INDEX\)=index to use   \C\ or \D\ or \E\ or \F\ or \H\   DATA(\FIELDS\)=fields to return  \.01;.02;.03;.03I\ Note that \NUMS\ and \MORE\ are not used.  \NUMS\ will be used when polling and retrieving results. FIELDS are DD fields separated by semi-colons only (no colon \ranged\  fields), FIELDS may be suffixed with \I\ for internal data vs default of  external data format.  Data is returned in FIELDS order. | 