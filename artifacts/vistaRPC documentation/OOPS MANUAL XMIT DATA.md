---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; OOPS MANUAL XMIT DATA 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}OOPS MANUAL XMIT DATA{:/}
 tag | {::nomarkdown}ENT{:/}
 routine | [OOPSGUI7](http://code.osehra.org/dox/Routine_OOPSGUI7_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This broker call is the front end for calling the routine to transmitdata to the AAC for DOL (CA1 and CA2s) or to transmit data to the National Database (NDB).{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}INPUT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}256{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This input parameter contains the date that the claims were originallytransmitted and should be re-transmitted for, the queue date and time, andwhether the data to be transmitted should be DOL or NDB data.  The format is:TRANSDT^QUEUEDT@TIME^DOL (or NDB).{:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 10:14:32 pm</p>{:/}