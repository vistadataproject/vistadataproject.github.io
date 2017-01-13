---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DVBAB 2507 PENDING REPORT 

 property | value 
--- | --- 
 label | {::nomarkdown}DVBAB 2507 PENDING REPORT{:/}
 tag | {::nomarkdown}STRT{:/}
 routine | [DVBAB6](http://code.osehra.org/dox/Routine_DVBAB6_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Generates a report based on the status of 2507 requests.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DVBCSORT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is  the status.  Valid choices are: A (age), S (status), V (veteranname), or R (routing location).{:/} | 
| {::nomarkdown}RSTAT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the Request Status.  Valid choices are: A (all), P (pending), N(new), or T (transcribed).  If DVBCSORT=A,S, or V - RSTAT cannot be null.{:/} | 
| {::nomarkdown}ERDAYS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} | {::nomarkdown}true{:/} | {::nomarkdown}If DVBCSORT = A (age) this must be the earliest age to start with (ie. 30days old).  This goes with the next variable OLDAYS which is the oldestage (ie. 1 day old and cannot be 0).  ERDAYS must be < OLDAYS{:/} | 
| {::nomarkdown}OLDAYS{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the Oldest age (ie 1 day) if DVBCSORT=A (age).  This goes withERDAYS (earliest age - ie 30 days).  ERDAYS must be < OLDAYS{:/} | 
| {::nomarkdown}ADIVNUM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}3{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the regional office number - this is required only if DVBCSORT=R,otherwise send as null.{:/} | 
| {::nomarkdown}ELTYP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the elapsed time.  Values are C (calendar days - default) or W(workdays).  If DVBCSORT=A,S, or V - this must not be null.{:/} | 




 Generated on January 13th 2017, 7:11:27 am