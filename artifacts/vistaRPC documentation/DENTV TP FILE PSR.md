---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DENTV TP FILE PSR 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DENTV TP FILE PSR{:/}
 tag | {::nomarkdown}PSR{:/}
 routine | [DENTVTP4](http://code.osehra.org/dox/Routine_DENTVTP4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC adds (or updates) a record to the Treatment Plan Transaction/Examfile (#228.2).  The only record type supported by this RPC is the PSR type, where the TYPE field (.29) = 3.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INPUT{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the input array for adding or updating a PSR transaction type to the Treatment Plan Transaction/Exam file (#228.2).  The input array will contain the following data:  data(\ENC\)=pointer to the DENTAL HISTORY file (#228.1)              required for Adding new records, optional for update records  data(\PSR\)=p1^p2^p3^p4^p5 where      p1=transaction id (-1 for add, valid txn id for update)      p2=exam date in external format (MM/DD/YY@HH:MM)      p3=provider id      p4=PSR score string (1-6 chars)      p5=status flag (A for add, U for update){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}