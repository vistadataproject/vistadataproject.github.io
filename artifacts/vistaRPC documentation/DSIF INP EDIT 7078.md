---
layout: default
title: VISTA RPC documentation
---



## [VISTA RPCs](TableOfContent.md) &#8594; DSIF INP EDIT 7078 

 property | value 
--- | --- 
 label | DSIF INP EDIT 7078
 tag | ED7078
 routine | [DSIFNOT6](http://code.osehra.org/dox/Routine_DSIFNOT6_source.html)
 return value type | SINGLE VALUE
 description | This RPC allows the update of certain fields in the 7078 and FEE PATIENT files.

### Input Parameters

| type | input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | --- | 
| vs:Input_Parameter-8994_02 | FB7078 | LITERAL | 99 | true | Internal Entry Number for 7078 (Required) | 
| vs:Input_Parameter-8994_02 | AUTHFRDT | LITERAL | 7 | true | Authorized From Date (Optional - FileMan Date) | 
| vs:Input_Parameter-8994_02 | AUTHTODT | LITERAL | 7 | true | Authorized To Date (Optional - FM Date) | 
| vs:Input_Parameter-8994_02 | DSCHDT | LITERAL | 7 | true | Discharge Date (Optional - FM Date) | 
| vs:Input_Parameter-8994_02 | ADMAUTH | LITERAL | 99 | true | Admitting Authority (Optional, Pointer to file 43.4 VA ADMITTING REGULATION) | 
| vs:Input_Parameter-8994_02 | POV | LITERAL | 99 | true | Purpose of Visit (Optional - Pointer to file 161.82 FEE BASIS PURPOSE OF VISIT) | 
| vs:Input_Parameter-8994_02 | PSA | LITERAL | 99 | true | Primary Service Area (Required - Pointer to file 4 INSITIUTION) | 
| vs:Input_Parameter-8994_02 | ACCREL | LITERAL | 1 | true | Accident Related (Optional Yes/No - Y : Yes, N : No) | 
| vs:Input_Parameter-8994_02 | PCR | LITERAL | 1 | true | Potential Cost Recovery Case (Optional Yes/No - Y : Yes, N : No [DEFAULT = N]) | 
| vs:Input_Parameter-8994_02 | PATYP | LITERAL | 2 | true | Patient Type (Optional, Set of Codes - 00 = Surgical; 10 = Medical; 86 = Psychiatry) | 
| vs:Input_Parameter-8994_02 | REFPROV | LITERAL | 99 | true | Referring Provider (Optional - Pointer to file 200 NEW PERSON) | 
| vs:Input_Parameter-8994_02 | PENDISP | LITERAL | 1 | true | Pending Disposition (Optional)                      \\ for none;                      '1' FOR FOLLOW-UP/NOT STABLE;                      '2' FOR AWAITING DISCHARGE/TRANSFER;) | 
| vs:Input_Parameter-8994_02 | AUTHSVC | LIST | 200 | true | WP Array, must start with a value of (1)=[text] | 
| vs:Input_Parameter-8994_02 | CONTRACT IEN | LITERAL | 25 | true | IEN of the FEE BASIS CONTRACT file (Optional) If contract is allowed to be deleted, pass in \@\ for IEN | 