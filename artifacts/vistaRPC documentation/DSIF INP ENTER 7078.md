---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF INP ENTER 7078 

 property | value 
--- | --- 
 label | DSIF INP ENTER 7078
 tag | EN7078
 routine | [DSIFNOT4](http://code.osehra.org/dox/Routine_DSIFNOT4_source.html)
 return value type | SINGLE VALUE
 description | This RPC enters a 7078, updates the FEE BASIS PATIENT FILE, and calls IFCAP to post the 1358.

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| REQ | LITERAL | 99 | true | Internal Number of Request (Required, Pointer to file 162.2) | 
| OBNUM | LITERAL | 99 | true | Obligation Number (Required, complete with sequence number after the '.') | 
| AUTODT | LITERAL | 7 | true | Authorized TO Date (Required, FM Date - Must be later than Authorized FROM date in file 162.2) | 
| DSCHDT | LITERAL | 7 | true | Discharge Date (Optional, FM Date - Must not be earlier than AUTODT) | 
| AUTH | LITERAL | 99 | true | Admitting Authority (Required, Pointer to file 43.4 VA ADMITTING REGULATION) | 
| ESTAMT | LITERAL | 9 | true | Estimated cost to the Veteran, will be passed to IFCAP (Required, Numeric up to 2 decimals) | 
| PATYP | LITERAL | 2 | true | Patient Type (Required, Set of Codes) 00 = Surgical 10 = Medical 86 = Psychiatry | 
| PDISP | LITERAL | 1 | true | Reason for Pending Disposition (Optional, Required if AUTODT is null) 1 = FOLLOW-UP/NOT STABLE 2 = AWAITING DISCHARGE/TRANSFER | 
| DCHTYP | LITERAL | 1 | true | Discharge Type (Required, Set of Codes) 1 - Transfer to VA 2 - Death With Autopsy 3 - Death Without Autopsy 4 - Discharge | 
| POV | LITERAL | 99 | true | Purpose of Visit (Optional - Pointer to file 161.82 FEE BASIS PURPOSE OF VISIT) | 
| PSA | LITERAL | 99 | true | Primary Service Area (Required - Pointer to file 4 INSITIUTION) | 
| ACCR | LITERAL | 1 | true | Accident Related (Optional Yes/No - Y : Yes, N : No) | 
| PCRC | LITERAL | 1 | true | Potential Cost Recovery Case (Required Yes/No - Y : Yes, N : No [DEFAULT = N]) | 
| AUTHSVC | LIST | 80 | true | Authorized Services (Word Processing - Default text from Site Parameter file 161.4 field #28) Array passed must be: AUTHSVC(1)= (text), with additional lines if needed AUTHSVC(2)= (text line 2), etc. | 
| REFPROV | LITERAL | 99 | true | Referring Provider (Optional - Pointer to file 200 NEW PERSON) | 
| CNTIEN | LITERAL | 25 | true | Contract IEN | 