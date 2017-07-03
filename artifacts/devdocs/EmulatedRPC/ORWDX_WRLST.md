---
layout: default
title: VISTA Emulator Documentation
---

## [Emulated RPCs](TableOfContents) &#8594; ORWDX WRLST
# ORWDX WRLST

Return list of dialogs for writing orders as: IEN;windowFormId;displayGroupId;type^displayText

Property | Value
--- | ---
Domain | Non-Clinical: File/Parameters
VISTA RPC Documentation | [ORWDX WRLST](../VISTARPC/ORWDX_WRLST)
MUMPS Implementation | [WRLST^ORWDX](http://code.osehra.org/dox/Routine_ORWDX_source.html)
Type | READ
Complexity | MODERATE
Uses | N/A
Return Type | ARRAY
Return Description | N/A
File Types Used | [101.41](../VDM/Order_Dialog-101_41), [200](../VDM/New_Person-200)
Parameters Used | [ORWOR WRITE ORDERS LIST](../Parameters/ORWOR_WRITE_ORDERS_LIST), [ORWDX WRITE ORDERS LIST](../Parameters/ORWDX_WRITE_ORDERS_LIST)


### Input Parameters

Name | Type | Required | Description | Example
--- | --- | --- | --- | ---
LOC | LITERAL | false | the location entity | 3

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:06 pm</p>{:/}