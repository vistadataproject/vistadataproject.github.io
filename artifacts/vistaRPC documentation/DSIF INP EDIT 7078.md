---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF INP EDIT 7078 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIF INP EDIT 7078{:/}
 tag | {::nomarkdown}ED7078{:/}
 routine | [DSIFNOT6](http://code.osehra.org/dox/Routine_DSIFNOT6_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC allows the update of certain fields in the 7078 and FEE PATIENT files.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}FB7078{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal Entry Number for 7078 (Required){:/} | 
| {::nomarkdown}AUTHFRDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Authorized From Date (Optional - FileMan Date){:/} | 
| {::nomarkdown}AUTHTODT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Authorized To Date (Optional - FM Date){:/} | 
| {::nomarkdown}DSCHDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Discharge Date (Optional - FM Date){:/} | 
| {::nomarkdown}ADMAUTH{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Admitting Authority (Optional, Pointer to file 43.4 VA ADMITTING REGULATION){:/} | 
| {::nomarkdown}POV{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Purpose of Visit (Optional - Pointer to file 161.82 FEE BASIS PURPOSE OF VISIT){:/} | 
| {::nomarkdown}PSA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Primary Service Area (Required - Pointer to file 4 INSITIUTION){:/} | 
| {::nomarkdown}ACCREL{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Accident Related (Optional Yes/No - Y : Yes, N : No){:/} | 
| {::nomarkdown}PCR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Potential Cost Recovery Case (Optional Yes/No - Y : Yes, N : No [DEFAULT = N]){:/} | 
| {::nomarkdown}PATYP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient Type (Optional, Set of Codes - 00 = Surgical; 10 = Medical; 86 = Psychiatry){:/} | 
| {::nomarkdown}REFPROV{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Referring Provider (Optional - Pointer to file 200 NEW PERSON){:/} | 
| {::nomarkdown}PENDISP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Pending Disposition (Optional)                      \\ for none;                      '1' FOR FOLLOW-UP/NOT STABLE;                      '2' FOR AWAITING DISCHARGE/TRANSFER;){:/} | 
| {::nomarkdown}AUTHSVC{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}200{:/} | {::nomarkdown}true{:/} | {::nomarkdown}WP Array, must start with a value of (1)=[text]{:/} | 
| {::nomarkdown}CONTRACT IEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}25{:/} | {::nomarkdown}true{:/} | {::nomarkdown}IEN of the FEE BASIS CONTRACT file (Optional) If contract is allowed to be deleted, pass in \@\ for IEN{:/} | 




 Generated on January 13th 2017, 6:24:32 am