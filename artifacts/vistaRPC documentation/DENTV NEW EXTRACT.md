---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV NEW EXTRACT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTV NEW EXTRACT{:/}
 tag | {::nomarkdown}Q{:/}
 routine | [DENTVRP8](http://code.osehra.org/dox/Routine_DENTVRP8_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC queues off the Dental Extract at a user designated time.  Upon completion of the extract, a TCP/IP client will be called from the tasked job to send the data to a text file.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INPUT{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the input array for queuing the Dental Extract.  The following input format is required:    DATA(\STARTDT\)=Start Date MM/DD/YYYY    DATA(\ENDDT\)=End Date MM/DD/YYYY    DATA(\RUNDTTM\)=Run Date/Time (task date) MM/DD/YYYY@HH:MM:SS    DATA(\FILE\)=folder/file location, e.g. C:\\Temp\\Extract.txt    DATA(\IPADX\)=IP address    DATA(\PORT\)=Port#    DATA(\PROVIEN\)=optional Provider IENs p1^p2^p3, etc    DATA(\FORMAT\)=0 for excel, 1 for access    DATA(\TXNS\)=optional CPFO or any combination of transaction statuses                     (compl/plan/find/obs)    DATA(\STN\)=optional facility{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:03 am</p>{:/}