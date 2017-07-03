---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; GMV VITALS/CAT/QUAL
# GMV VITALS/CAT/QUAL

Returns all qualifier information for the vital types selected. When argument is null, all qualifier information will be returned for all vital types. This remote procedure call is documented in Integration Agreement 4359.

Property | Value
--- | ---
Domain | Non-Clinical: Files
VISTA RPC Documentation | GMV VITALS/CAT/QUAL
MUMPS Implementation | [GETVITAL^GMVUTL7](http://code.osehra.org/dox/Routine_GMVUTL7_source.html)
Type | READ
Complexity | MODERATE
Uses | N/A
Return Type | ARRAY
Return Description | N/A
File Types Used | [120.51](../VDM/Gmrv_Vital_Type-120_51), [120.52](../VDM/Gmrv_Vital_Qualifier-120_52), [120.53](../VDM/Gmrv_Vital_Category-120_53), [120.57](../VDM/Gmrv_Vitals_Parameters-120_57)
Parameters Used | None


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
GMVLIST | LITERAL | true | A list of vital type abbreviations separated by carets | HT^WT

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}