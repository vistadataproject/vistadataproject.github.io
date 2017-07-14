---
layout: default
title: VISTA Emulator Documentation
---

#### [Developer Documentation](../index) &#187; [Emulated RPCs](TableOfContents) &#187; ORWDX WRLST<br/>
# ORWDX WRLST

Return list of dialogs for writing orders as: IEN;windowFormId;displayGroupId;type^displayText

**Native RPC Documentation:** [ORWDX WRLST](../VISTARPC/ORWDX_WRLST)

**MUMPS Implementation:** [WRLST^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)

## Properties

Property | Value
--- | ---
Type | Non-Clinical
Domain | File/Parameters
Class | READ
Complexity | MODERATE
Uses | 
Return Type | ARRAY
Return Description | 
File Types Used | [101.41](../VDM/Order_Dialog-101_41), [200](../VDM/New_Person-200)
Parameters Used | [ORWOR WRITE ORDERS LIST](../Parameters/ORWOR_WRITE_ORDERS_LIST), [ORWDX WRITE ORDERS LIST](../Parameters/ORWDX_WRITE_ORDERS_LIST)


## Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
LOC | LITERAL | false | the location entity | 3

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:34 pm</p>{:/}