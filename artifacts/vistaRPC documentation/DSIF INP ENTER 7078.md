---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; DSIF INP ENTER 7078 

 property | value 
--- | --- 
 label | {::nomarkdown}DSIF INP ENTER 7078{:/}
 tag | {::nomarkdown}EN7078{:/}
 routine | [DSIFNOT4](http://code.osehra.org/dox/Routine_DSIFNOT4_source.html)
 return value type | {::nomarkdown}SINGLE VALUE{:/}
 description | {::nomarkdown}This RPC enters a 7078, updates the FEE BASIS PATIENT FILE, and calls IFCAP to post the 1358.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}REQ{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Internal Number of Request (Required, Pointer to file 162.2){:/} | 
| {::nomarkdown}OBNUM{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Obligation Number (Required, complete with sequence number after the '.'){:/} | 
| {::nomarkdown}AUTODT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Authorized TO Date (Required, FM Date - Must be later than Authorized FROM date in file 162.2){:/} | 
| {::nomarkdown}DSCHDT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}7{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Discharge Date (Optional, FM Date - Must not be earlier than AUTODT){:/} | 
| {::nomarkdown}AUTH{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Admitting Authority (Required, Pointer to file 43.4 VA ADMITTING REGULATION){:/} | 
| {::nomarkdown}ESTAMT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}9{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Estimated cost to the Veteran, will be passed to IFCAP (Required, Numeric up to 2 decimals){:/} | 
| {::nomarkdown}PATYP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}2{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient Type (Required, Set of Codes) 00 = Surgical 10 = Medical 86 = Psychiatry{:/} | 
| {::nomarkdown}PDISP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Reason for Pending Disposition (Optional, Required if AUTODT is null) 1 = FOLLOW-UP/NOT STABLE 2 = AWAITING DISCHARGE/TRANSFER{:/} | 
| {::nomarkdown}DCHTYP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Discharge Type (Required, Set of Codes) 1 - Transfer to VA 2 - Death With Autopsy 3 - Death Without Autopsy 4 - Discharge{:/} | 
| {::nomarkdown}POV{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Purpose of Visit (Optional - Pointer to file 161.82 FEE BASIS PURPOSE OF VISIT){:/} | 
| {::nomarkdown}PSA{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Primary Service Area (Required - Pointer to file 4 INSITIUTION){:/} | 
| {::nomarkdown}ACCR{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Accident Related (Optional Yes/No - Y : Yes, N : No){:/} | 
| {::nomarkdown}PCRC{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}1{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Potential Cost Recovery Case (Required Yes/No - Y : Yes, N : No [DEFAULT = N]){:/} | 
| {::nomarkdown}AUTHSVC{:/} | {::nomarkdown}LIST{:/} | {::nomarkdown}80{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Authorized Services (Word Processing - Default text from Site Parameter file 161.4 field #28) Array passed must be: AUTHSVC(1)= (text), with additional lines if needed AUTHSVC(2)= (text line 2), etc.{:/} | 
| {::nomarkdown}REFPROV{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}99{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Referring Provider (Optional - Pointer to file 200 NEW PERSON){:/} | 
| {::nomarkdown}CNTIEN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}25{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Contract IEN{:/} | 




 Generated on January 13th 2017, 7:15:28 am