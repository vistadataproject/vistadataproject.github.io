---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIC DPT INP INFO 

 property | value 
--- | --- 
 label | DSIC DPT INP INFO
 tag | IN
 routine | [DSICDPT](http://code.osehra.org/dox/Routine_DSICDPT_source.html)
 return value type | ARRAY
 description | This with return information about an admission event.  This RPC is a wrapper around the IN5^VADPT API.  If you pass in a date, then the data related to that date and admission will be returned,  If no date is passed, then get inpatient status as of NOW. For more detailed description, see IN^DSICDPT routine.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DFN | LITERAL | 15 | true | This is the pointer value to the PATIENT file (i.e., DFN) | 
| DATE | LITERAL | 13 | true | This is the Fileman format, date only, for which you wish to retrieve inpatient movement information.  If it is not passed, then the program will use NOW as the date. | 
| LODGE | LITERAL | 1 | true | This is a Boolean flag (1 or 0 or <null>).  If LODGE=1 then allow for lodger type admissions.  If not, exclude lodger type admissions from the search.  The default value is <null>, exclude lodger admisssions. | 




 Generated on January 11th 2017, 7:15:04 am