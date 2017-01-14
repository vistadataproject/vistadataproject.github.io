---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; MAG4 CP UPDATE CONSULT 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}MAG4 CP UPDATE CONSULT{:/}
 tag | {::nomarkdown}UPDCONS{:/}
 routine | [MAGGSCP](http://code.osehra.org/dox/Routine_MAGGSCP_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}The Imaging capture station can mark a transaction as complete by making  this call after a successful capture.  This call puts the procedure in  a status of 'pr' (ready for interpretation.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}MAGCMP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the Complete Flag that Clinical Procedures doesn't deal with.  It is always '2' which indicates a 'Complete' transaction.Request listing.  (CPLIST^GMRCCP){:/} | 
| {::nomarkdown}MAGTIU{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}30{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The TIUDA of the Note associated with the Consult.  This TIUDA is produced by a call to ITIU^MDAPI{:/} | 
| {::nomarkdown}MAGCMP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}10{:/} | {::nomarkdown}true{:/} | {::nomarkdown}This is the Complete Flag that Clinical Procedures doesn't deal with.It is always '2' which indicates a 'Complete' transaction.{:/} | {::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:25 am</p>{:/}