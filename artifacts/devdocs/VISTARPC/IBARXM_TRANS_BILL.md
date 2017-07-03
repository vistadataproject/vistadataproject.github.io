---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; IBARXM TRANS BILL
# IBARXM TRANS BILL

This rpc will receive data that a charge should be created for a pharmacy copayment that had previously not been charged due to the patient reaching their copayment cap amount.This RPC call does not send user data to remote side.

Property | Value
--- | ---
Label | BILL
Routine | [IBARXMR](http://code.osehra.org/dox/Routine_IBARXMR_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IBICN | LITERAL |  | true | This is the patient&#x27;s ICN, to be used to identify the patient.
IBT | LITERAL |  | true | This is the transaction number to bill.
IBB | LITERAL |  | true | This is the amount to bill.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}