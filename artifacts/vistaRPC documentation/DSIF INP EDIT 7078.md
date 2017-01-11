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

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| FB7078 | LITERAL | 99 | true | Internal Entry Number for 7078 (Required) | 
| AUTHFRDT | LITERAL | 7 | true | Authorized From Date (Optional - FileMan Date) | 
| AUTHTODT | LITERAL | 7 | true | Authorized To Date (Optional - FM Date) | 
| DSCHDT | LITERAL | 7 | true | Discharge Date (Optional - FM Date) | 
| ADMAUTH | LITERAL | 99 | true | Admitting Authority (Optional, Pointer to file 43.4 VA ADMITTING REGULATION) | 
| POV | LITERAL | 99 | true | Purpose of Visit (Optional - Pointer to file 161.82 FEE BASIS PURPOSE OF VISIT) | 
| PSA | LITERAL | 99 | true | Primary Service Area (Required - Pointer to file 4 INSITIUTION) | 
| ACCREL | LITERAL | 1 | true | Accident Related (Optional Yes/No - Y : Yes, N : No) | 
| PCR | LITERAL | 1 | true | Potential Cost Recovery Case (Optional Yes/No - Y : Yes, N : No [DEFAULT = N]) | 
| PATYP | LITERAL | 2 | true | Patient Type (Optional, Set of Codes - 00 = Surgical; 10 = Medical; 86 = Psychiatry) | 
| REFPROV | LITERAL | 99 | true | Referring Provider (Optional - Pointer to file 200 NEW PERSON) | 
| PENDISP | LITERAL | 1 | true | Pending Disposition (Optional)                      \\ for none;                      '1' FOR FOLLOW-UP/NOT STABLE;                      '2' FOR AWAITING DISCHARGE/TRANSFER;) | 
| AUTHSVC | LIST | 200 | true | WP Array, must start with a value of (1)=[text] | 
| CONTRACT IEN | LITERAL | 25 | true | IEN of the FEE BASIS CONTRACT file (Optional) If contract is allowed to be deleted, pass in \@\ for IEN | 




Generated on January 11th 2017, 6:34:23 am