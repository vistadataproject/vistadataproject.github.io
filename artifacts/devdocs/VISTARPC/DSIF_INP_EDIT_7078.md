---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF INP EDIT 7078
# DSIF INP EDIT 7078

This RPC allows the update of certain fields in the 7078 and FEE PATIENT files.

Property | Value
--- | ---
Label | ED7078
Routine | [DSIFNOT6](http://code.osehra.org/dox/Routine_DSIFNOT6_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FB7078 | LITERAL | 99 | true | Internal Entry Number for 7078 (Required)
AUTHFRDT | LITERAL | 7 | true | Authorized From Date (Optional - FileMan Date)
AUTHTODT | LITERAL | 7 | true | Authorized To Date (Optional - FM Date)
DSCHDT | LITERAL | 7 | true | Discharge Date (Optional - FM Date)
ADMAUTH | LITERAL | 99 | true | Admitting Authority (Optional, Pointer to file 43.4 VA ADMITTING REGULATION)
POV | LITERAL | 99 | true | Purpose of Visit (Optional - Pointer to file 161.82 FEE BASIS PURPOSE OF VISIT)
PSA | LITERAL | 99 | true | Primary Service Area (Required - Pointer to file 4 INSITIUTION)
ACCREL | LITERAL | 1 | true | Accident Related (Optional Yes/No - Y : Yes, N : No)
PCR | LITERAL | 1 | true | Potential Cost Recovery Case (Optional Yes/No - Y : Yes, N : No [DEFAULT &#x3D; N])
PATYP | LITERAL | 2 | true | Patient Type (Optional, Set of Codes - 00 &#x3D; Surgical; 10 &#x3D; Medical; 86 &#x3D; Psychiatry)
REFPROV | LITERAL | 99 | true | Referring Provider (Optional - Pointer to file 200 NEW PERSON)
PENDISP | LITERAL | 1 | true | Pending Disposition (Optional)                      &quot;&quot; for none;                      &#x27;1&#x27; FOR FOLLOW-UP/NOT STABLE;                      &#x27;2&#x27; FOR AWAITING DISCHARGE/TRANSFER;)
AUTHSVC | LIST | 200 | true | WP Array, must start with a value of (1)&#x3D;[text]
CONTRACT IEN | LITERAL | 25 | true | IEN of the FEE BASIS CONTRACT file (Optional) If contract is allowed to be deleted, pass in &quot;@&quot; for IEN



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}