---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; TIU IS USER A PROVIDER?<br/>
# TIU IS USER A PROVIDER?

This Boolean RPC returns TRUE if the user was a known provider on the date specified.

**Native RPC Documentation:** [TIU IS USER A PROVIDER?](../VISTARPC/TIU_IS_USER_A_PROVIDER?)

**MUMPS Implementation:** [ISAPROV^TIUSRVP1](http://code.osehra.org/dox/Routine_TIUSRVP1_source.html)

## Properties

Property | Value
--- | ---
Type | Non-Clinical
Domain | Others
Class | READ
Complexity | DIFFICULT
Uses | 
Return Type | SINGLE VALUE
Return Description | 
File Types Used | [200](../VDM/New_Person-200), [8930](../VDM/Usr_Class-8930), [8930.3](../VDM/Usr_Class_Membership-8930_3), [8932.1](../VDM/Person_Class-8932_1)
Parameters Used | None


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
USER |  | false | Optional pointer to the NEW PERSON FILE (#200). If user is unspecified the current user will be assumed. | 63
DATE |  | false | Optional FileMan formatted date (time). If none is provided the current date is assumed. | 3170505

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:46 pm</p>{:/}