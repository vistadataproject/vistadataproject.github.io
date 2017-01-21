---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; MHV LOG CONFIG 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MHV LOG CONFIG{:/}
 tag | {::nomarkdown}LOGSET{:/}
 routine | [MHVUL1](http://code.osehra.org/dox/Routine_MHVUL1_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}Configure MHV application logging parameters.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}UPDATE{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}32000{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Configuration parameters to update     UPDATE(\STATE\) - Flag 0/1                      On or Off    UPDATE(\PURGE\) - Purge Date/Time                      Fileman date/time                      Default 30 days from Today    UPDATE(\LEVEL\) - Logging level                      Error, Trace, Debug, Name                      Default - Trace    UPDATE(\NAMES\) - Caret delimited list of log entry namesUPDATE(\AUTOPURGE\) - Flag 0/1                      Default - 0 Off     UPDATE(\DAYS\) - Number of Days to keep{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:14 am</p>{:/}