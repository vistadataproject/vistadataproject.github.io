---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF PAT_VEN PAYMENT REPORT 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}DSIF PAT_VEN PAYMENT REPORT{:/}
 tag | {::nomarkdown}EN{:/}
 routine | [DSIFRPT3](http://code.osehra.org/dox/Routine_DSIFRPT3_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}This is an RPC version of the FBPAY routines.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FBSORT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Sort Indicator (1 = Patient, 0 = Vendor - Default = 0){:/} | 
| {::nomarkdown}FBIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient/Vendor Internal Entry Number (File 161/161.2 respectively){:/} | 
| {::nomarkdown}FBBDATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Begining Date for report (FileMan Format){:/} | 
| {::nomarkdown}FBEDATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Ending Date for report (FileMan Format){:/} | 
| {::nomarkdown}FB1725R{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Mill-Bill indicator only used if PROGS passes in Fee Programs with internal numbers 2, 3 or 6. M - include only 38 U.S.C. 1725 claimsN - exclude 38 U.S.C. 1725 claimsA - All{:/} | 
| {::nomarkdown}PROGS{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}List of Fee Programs to include on report (Multi-piece IEN ^ Name) (IEN is pointer to file 161.8 FEE PROGRAMS, the user should only be allowed to select active programs.){:/} | 

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 21st 2017, 4:25:14 am</p>{:/}