---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DVBAB 2507 PENDING REPORT 

 property | value 
--- | --- 
 label | DVBAB 2507 PENDING REPORT
 tag | STRT
 routine | [DVBAB6](http://code.osehra.org/dox/Routine_DVBAB6_source.html)
 return value type | GLOBAL ARRAY
 description | Generates a report based on the status of 2507 requests.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| DVBCSORT | LITERAL | 1 | true | This is  the status.  Valid choices are: A (age), S (status), V (veteranname), or R (routing location). | 
| RSTAT | LITERAL | 1 | true | This is the Request Status.  Valid choices are: A (all), P (pending), N(new), or T (transcribed).  If DVBCSORT=A,S, or V - RSTAT cannot be null. | 
| ERDAYS | LITERAL | 3 | true | If DVBCSORT = A (age) this must be the earliest age to start with (ie. 30days old).  This goes with the next variable OLDAYS which is the oldestage (ie. 1 day old and cannot be 0).  ERDAYS must be < OLDAYS | 
| OLDAYS | LITERAL | 3 | true | This is the Oldest age (ie 1 day) if DVBCSORT=A (age).  This goes withERDAYS (earliest age - ie 30 days).  ERDAYS must be < OLDAYS | 
| ADIVNUM | LITERAL | 3 | true | This is the regional office number - this is required only if DVBCSORT=R,otherwise send as null. | 
| ELTYP | LITERAL | 1 | true | This is the elapsed time.  Values are C (calendar days - default) or W(workdays).  If DVBCSORT=A,S, or V - this must not be null. | 




 Generated on January 11th 2017, 7:15:04 am