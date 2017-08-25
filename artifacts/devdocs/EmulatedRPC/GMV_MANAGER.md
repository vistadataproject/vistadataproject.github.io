---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; GMV MANAGER<br/>
# GMV MANAGER

Performs many functions for the Manager module. This remote procedure call is documented in Integration Agreement 4360.  Currently, the routine supports the following options: VT, GETLIST, GETDEF, GETDATA, GETTEMP, GETQUAL

**Native RPC Documentation:** [GMV MANAGER](../VISTARPC/GMV_MANAGER)

**MUMPS Implementation:** [RPC^GMVRPCM](http://code.osehra.org/dox/Routine_GMVRPCM_source.html)

## Properties

Property | Value
--- | ---
Type | Non-Clinical
Domain | Others
Class | UTILITY
Complexity | DIFFICULT
Uses | 
Return Type | ARRAY
Return Description | 
File Types Used | [120.51](../VDM/Gmrv_Vital_Type-120_51), [120.52](../VDM/Gmrv_Vital_Qualifier-120_52), [120.53](../VDM/Gmrv_Vital_Category-120_53), [4.2](../VDM/Domain-4_2), [4](../VDM/Institution-4), [44](../VDM/Hospital_Location-44), [200](../VDM/New_Person-200)
Parameters Used | [GMV TEMPLATE DEFAULT](../Parameters/GMV_TEMPLATE_DEFAULT), [GMV TEMPLATE](../Parameters/GMV_TEMPLATE), [GMV ALLOW USER TEMPLATES](../Parameters/GMV_ALLOW_USER_TEMPLATES)


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
OPTION | LITERAL | true | Routine tag line in GMVRPCM to call | GETLIST
DATA | LITERAL | false | Other data as required for the call | 

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:46 pm</p>{:/}