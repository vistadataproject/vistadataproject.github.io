---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; TIU REQUIRES COSIGNATURE<br/>
# TIU REQUIRES COSIGNATURE

This Boolean RPC simply evaluates whether the current user requirescosignature for TIU DOCUMENTS, and returns a 1 if true, or a 0 if false.

**Native RPC Documentation:** [TIU REQUIRES COSIGNATURE](../VISTARPC/TIU_REQUIRES_COSIGNATURE)

**MUMPS Implementation:** [REQCOS^TIUSRVA](http://code.osehra.org/dox/Routine_TIUSRVA_source.html)

## Properties

Property | Value
--- | ---
Type | Non-Clinical
Domain | Files
Class | READ
Complexity | DIFFICULT
Uses | 
Return Type | SINGLE VALUE
Return Description | 
File Types Used | [8925](../VDM/Tiu_Document-8925), [8925.1](../VDM/Tiu_Document_Definition-8925_1), [8925.95](../VDM/TIU_Document_Parameters-8925_95), [8930](../VDM/Usr_Class-8930), [8930.3](../VDM/Usr_Class_Membership-8930_3)
Parameters Used | None


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
TIUTYP |  | false | Pointer to the TIU DOCUMENT DEFINITION FILE (#8925.1). | 3
TIUDA |  | false | Pointer to the TIU DOCUMENT FILE (#8925). References the document to be edited/signed. | 0
TIUSER |  | false | Optional parameter. Pointer to the NEW PERSON FILE (#200). Pass this in if author is NOT the current user (e.g., User is a transcriptionist. | 62
TIUDT |  | false | The date to reference for validating a user | 3170517.062811

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:46 pm</p>{:/}