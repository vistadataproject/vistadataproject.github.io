---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; TIU GET DEFAULT PROVIDER<br/>
# TIU GET DEFAULT PROVIDER

Returns the default provider as specified by the TIU Site Parameter DEFAULT PRIMARY PROVIDER

**Native RPC Documentation:** [TIU GET DEFAULT PROVIDER](../VISTARPC/TIU_GET_DEFAULT_PROVIDER)

**MUMPS Implementation:** [DEFDOC^TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)

## Properties

Property | Value
--- | ---
Type | Non-Clinical
Domain | Files
Class | READ
Complexity | MODERATE
Uses | 
Return Type | SINGLE VALUE
Return Description | 
File Types Used | [44](../VDM/Hospital_Location-44), [200](../VDM/New_Person-200), [8925](../VDM/Tiu_Document-8925), [8925.99](../VDM/TIU_Parameters-8925_99), [8930](../VDM/Usr_Class-8930), [8930.3](../VDM/Usr_Class_Membership-8930_3), [8932.1](../VDM/Person_Class-8932_1)
Parameters Used | None


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
HLOC | LITERAL | false | Pointer to the Hospital Location File (#44). | 3
USER | LITERAL | false | Optional Pointer to the New Person File (#200) identifying the Author. If nothing is passed, the current user will be assumed. | 63
TIUDT | LITERAL | false | date, defaults to current date in FM format | 3170517.062721
TIUIEN | LITERAL | false | This is the Record # (IEN) of the document in the TIU DOCUMENT FILE(#8925). | 1

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:34 pm</p>{:/}