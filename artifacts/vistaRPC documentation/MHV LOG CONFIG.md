---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MHV LOG CONFIG 

 property | value 
--- | --- 
 label | MHV LOG CONFIG
 tag | LOGSET
 routine | [MHVUL1](http://code.osehra.org/dox/Routine_MHVUL1_source.html)
 return value type | SINGLE VALUE
 description | Configure MHV application logging parameters.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| UPDATE | LIST | 32000 | true | Configuration parameters to update     UPDATE(\STATE\) - Flag 0/1                      On or Off    UPDATE(\PURGE\) - Purge Date/Time                      Fileman date/time                      Default 30 days from Today    UPDATE(\LEVEL\) - Logging level                      Error, Trace, Debug, Name                      Default - Trace    UPDATE(\NAMES\) - Caret delimited list of log entry namesUPDATE(\AUTOPURGE\) - Flag 0/1                      Default - 0 Off     UPDATE(\DAYS\) - Number of Days to keep | 




 ###### Generated on January 11th 2017, 6:39:43 am