---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV TP FILE HNC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTV TP FILE HNC{:/}
 tag | {::nomarkdown}HNC{:/}
 routine | [DENTVTP4](http://code.osehra.org/dox/Routine_DENTVTP4_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC adds, updates or marks as deleted, records to the Treatment Plan Transaction/Exam file (#228.2).  The only record type supported by this RPC is the Head and Neck type, where the TYPE field (.29)=4.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INPUT{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the input array for adding, updating or deleting multiple Head&Neck transaction types to the Treatment Plan Transaction/Exam file(#228.2).  The input array will contain the following data:  data(\ENC\)=pointer to the DENTAL HISTORY file (#228.1)              required for Adding new records, optional for update records  data(n)    =p1^p2^p3^p4^p5^p6^p7^p8^p9^p10^p11^p12^p13^p14^p15              =WP^word processing text             =WP^word processing text, etc  where n=number   and  p1=txn id (-1 for add, valid txn id for update/delete)         p2=prov id, p3=X coord (number), p4=Y coord (number)       p5=lesion dt in external fmt (MM/DD/YY@HH:MM)       p6=color (number),  p7=shape (number),       p8=size (0,1,2 from 228.3)       p9=description,  p10=deleted flag,  p11=master flag       p12=link to master (pointer to 228.2),  p13=result flag       p14=read only flag,  p15=status (A=add,U=update,D=mark as deleted){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 12:25:50 am</p>{:/}