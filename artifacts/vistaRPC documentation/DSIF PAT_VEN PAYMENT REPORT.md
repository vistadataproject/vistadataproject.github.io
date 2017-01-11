---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF PAT_VEN PAYMENT REPORT 

 property | value 
--- | --- 
 label | DSIF PAT_VEN PAYMENT REPORT
 tag | EN
 routine | [DSIFRPT3](http://code.osehra.org/dox/Routine_DSIFRPT3_source.html)
 return value type | GLOBAL ARRAY
 description | This is an RPC version of the FBPAY routines.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FBSORT | LITERAL | 1 | true | Sort Indicator (1 = Patient, 0 = Vendor - Default = 0) | 
| FBIEN | LITERAL | 99 | true | Patient/Vendor Internal Entry Number (File 161/161.2 respectively) | 
| FBBDATE | LITERAL | 7 | true | Begining Date for report (FileMan Format) | 
| FBEDATE | LITERAL | 7 | true | Ending Date for report (FileMan Format) | 
| FB1725R | LITERAL | 1 | true | Mill-Bill indicator only used if PROGS passes in Fee Programs with internal numbers 2, 3 or 6. M - include only 38 U.S.C. 1725 claimsN - exclude 38 U.S.C. 1725 claimsA - All | 
| PROGS | LIST | 99 | true | List of Fee Programs to include on report (Multi-piece IEN ^ Name) (IEN is pointer to file 161.8 FEE PROGRAMS, the user should only be allowed to select active programs.) | 




 ###### Generated on January 11th 2017, 6:39:43 am