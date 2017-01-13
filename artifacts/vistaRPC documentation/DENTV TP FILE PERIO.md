---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV TP FILE PERIO 

 property | value 
--- | --- 
 label | {::nomarkdown}DENTV TP FILE PERIO{:/}
 tag | {::nomarkdown}PER{:/}
 routine | [DENTVTP4](http://code.osehra.org/dox/Routine_DENTVTP4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC adds (or updates) a reocrd to the Treatment Plan Transaction/Exam file (#228.2).  The only record type supported by this RPC is the Perio type, where the TYPE field (.29) = 2.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INPUT{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the input array for adding or updating a Perio transaction type to the Treatment Plan Transaction/Exam file (#228.2).  The input array will contain the following data:  data(\ENC\)=pointer to the DENTAL HISTORY file (#228.1)              required for Adding new records, optional for update records  data(\PER\)=p1^p2^p3^p4^p5 where      p1=transaction id (-1 for add, valid txn id for update)      p2=exam number (integer value, 0-99999)      p3=exam date in external format (MM/DD/YY@HH:MM)      p4=provider id      p5=status flag (A=add, U=update){:/} | 




 Generated on January 13th 2017, 7:15:28 am