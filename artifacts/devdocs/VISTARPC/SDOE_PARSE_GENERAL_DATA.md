---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SDOE PARSE GENERAL DATA<br/>
# SDOE PARSE GENERAL DATA

This Remote Procedure Call (RPC) will parse the data returned bythe 'SDOE GET GENERAL DATA' RPC into individual field nodes. 

## Properties

Property | Value
--- | ---
Label | PARSE
Routine | [SDOERPC](http://code.osehra.org/dox/Routine_SDOERPC_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ENCOUNTER DATA | LIST |  | true | This array contains subscripts that correspond to each node of data foran Outpatient Encounter entry.Note: Currently (7/97) only the zeroth node is returned. Also, onlyfields .01 thru .08 and .1 thru .13 of the zeroth are returned.Other nodes and fields are not supported.For detail information regarding the fields, see data dictionary forthe Outpatient Encounter file (#409.68).
ENCOUNTER PARSE FORMAT | LITERAL |  | true | Defines format for parsed data.Valid Values:-------------      INTERNAL - use internal format       EXTERNAL - external/display format.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}