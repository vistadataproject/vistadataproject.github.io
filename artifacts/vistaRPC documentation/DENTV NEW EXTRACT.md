---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DENTV NEW EXTRACT 

 property | value 
--- | --- 
 label | DENTV NEW EXTRACT
 tag | Q
 routine | [DENTVRP8](http://code.osehra.org/dox/Routine_DENTVRP8_source.html)
 return value type | SINGLE VALUE
 description | This RPC queues off the Dental Extract at a user designated time.  Upon completion of the extract, a TCP/IP client will be called from the tasked job to send the data to a text file.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| INPUT | LIST | 30 | true | This is the input array for queuing the Dental Extract.  The following input format is required:    DATA(\STARTDT\)=Start Date MM/DD/YYYY    DATA(\ENDDT\)=End Date MM/DD/YYYY    DATA(\RUNDTTM\)=Run Date/Time (task date) MM/DD/YYYY@HH:MM:SS    DATA(\FILE\)=folder/file location, e.g. C:\\Temp\\Extract.txt    DATA(\IPADX\)=IP address    DATA(\PORT\)=Port#    DATA(\PROVIEN\)=optional Provider IENs p1^p2^p3, etc    DATA(\FORMAT\)=0 for excel, 1 for access    DATA(\TXNS\)=optional CPFO or any combination of transaction statuses                     (compl/plan/find/obs)    DATA(\STN\)=optional facility | 




 ###### Generated on January 11th 2017, 6:39:43 am