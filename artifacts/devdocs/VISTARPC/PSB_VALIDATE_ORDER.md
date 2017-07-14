---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; PSB VALIDATE ORDER<br/>
# PSB VALIDATE ORDER



## Properties

Property | Value
--- | ---
Label | EN
Routine | [PSBVDLVL](http://code.osehra.org/dox/Routine_PSBVDLVL_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 10 | true | Patient IEN
PSBIEN | LITERAL |  | true | Medication Order Number
PSBTYPE | LITERAL | 2 | true | Order Type U for unit dose orderV for IV order
PSBADMIN | LITERAL |  | true | Administration date/time, if one is present.
PSBTAB | LITERAL | 10 | true | Medication tab the order is on.
PSBUID | LITERAL |  | true | The actual scan value.
PSBASTS | LITERAL |  | true | Current scan status of the VDL of the medication.
PSBORSTS | LITERAL |  | true | Current order status on the VDL&gt;
PSBRMV |  |  | true | Action the user is trying to take.
psbdien |  |  |  | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}