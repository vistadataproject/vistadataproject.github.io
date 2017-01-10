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

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | REQ | LITERAL | 99 | true | Internal Number of Request (Required, Pointer to file 162.2) | 
| vs:Input_Parameter-8994_02 | OBNUM | LITERAL | 99 | true | Obligation Number (Required, complete with sequence number after the '.') | 
| vs:Input_Parameter-8994_02 | AUTODT | LITERAL | 7 | true | Authorized TO Date (Required, FM Date - Must be later than Authorized FROM date in file 162.2) | 
| vs:Input_Parameter-8994_02 | DSCHDT | LITERAL | 7 | true | Discharge Date (Optional, FM Date - Must not be earlier than AUTODT) | 
| vs:Input_Parameter-8994_02 | AUTH | LITERAL | 99 | true | Admitting Authority (Required, Pointer to file 43.4 VA ADMITTING REGULATION) | 
| vs:Input_Parameter-8994_02 | ESTAMT | LITERAL | 9 | true | Estimated cost to the Veteran, will be passed to IFCAP (Required, Numeric up to 2 decimals) | 
| vs:Input_Parameter-8994_02 | PATYP | LITERAL | 2 | true | Patient Type (Required, Set of Codes) 00 = Surgical 10 = Medical 86 = Psychiatry | 
| vs:Input_Parameter-8994_02 | PDISP | LITERAL | 1 | true | Reason for Pending Disposition (Optional, Required if AUTODT is null) 1 = FOLLOW-UP/NOT STABLE 2 = AWAITING DISCHARGE/TRANSFER | 
| vs:Input_Parameter-8994_02 | DCHTYP | LITERAL | 1 | true | Discharge Type (Required, Set of Codes) 1 - Transfer to VA 2 - Death With Autopsy 3 - Death Without Autopsy 4 - Discharge | 
| vs:Input_Parameter-8994_02 | POV | LITERAL | 99 | true | Purpose of Visit (Optional - Pointer to file 161.82 FEE BASIS PURPOSE OF VISIT) | 
| vs:Input_Parameter-8994_02 | PSA | LITERAL | 99 | true | Primary Service Area (Required - Pointer to file 4 INSITIUTION) | 
| vs:Input_Parameter-8994_02 | ACCR | LITERAL | 1 | true | Accident Related (Optional Yes/No - Y : Yes, N : No) | 
| vs:Input_Parameter-8994_02 | PCRC | LITERAL | 1 | true | Potential Cost Recovery Case (Required Yes/No - Y : Yes, N : No [DEFAULT = N]) | 
| vs:Input_Parameter-8994_02 | AUTHSVC | LIST | 80 | true | Authorized Services (Word Processing - Default text from Site Parameter file 161.4 field #28) Array passed must be: AUTHSVC(1)= (text), with additional lines if needed AUTHSVC(2)= (text line 2), etc. | 
| vs:Input_Parameter-8994_02 | REFPROV | LITERAL | 99 | true | Referring Provider (Optional - Pointer to file 200 NEW PERSON) | 
| vs:Input_Parameter-8994_02 | CNTIEN | LITERAL | 25 | true | Contract IEN | 