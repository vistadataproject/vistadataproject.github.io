---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; MAG4 CP UPDATE CONSULT 

 property | value 
--- | --- 
 label | MAG4 CP UPDATE CONSULT
 tag | UPDCONS
 routine | [MAGGSCP](http://code.osehra.org/dox/Routine_MAGGSCP_source.html)
 return value type | SINGLE VALUE
 description | The Imaging capture station can mark a transaction as complete by making  this call after a successful capture.  This call puts the procedure in  a status of 'pr' (ready for interpretation.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| MAGCMP | LITERAL | 10 | true | This is the Complete Flag that Clinical Procedures doesn't deal with.  It is always '2' which indicates a 'Complete' transaction.Request listing.  (CPLIST^GMRCCP) | 
| MAGTIU | LITERAL | 30 | true | The TIUDA of the Note associated with the Consult.  This TIUDA is produced by a call to ITIU^MDAPI | 
| MAGCMP | LITERAL | 10 | true | This is the Complete Flag that Clinical Procedures doesn't deal with.It is always '2' which indicates a 'Complete' transaction. | 




 ###### Generated on January 11th 2017, 6:39:43 am