---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; OOPS CHECK PAID EMP DATA
# OOPS CHECK PAID EMP DATA

This broker call checks to make sure that if the PERSONNEL STATUS (field #2)is an employee and the Pay Plan is equal to "OT" that the Grade (#16), Step(#17), and Retirement (#60) fields contain valid responses.

Property | Value
--- | ---
Label | VALEMP
Routine | [OOPSGUI1](http://code.osehra.org/dox/Routine_OOPSGUI1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 25 | true | The input parameter, IEN, contains the record identifier for the ASISTS claimthat is being validated.
INPUT | LITERAL | 25 | true | Parameter INPUT is the FORM name and IEN of OOPS(2260 claim number that needsto be checked. The input format is:FORM^IEN



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}