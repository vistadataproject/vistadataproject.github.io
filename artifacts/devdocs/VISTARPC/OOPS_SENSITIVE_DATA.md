---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; OOPS SENSITIVE DATA
# OOPS SENSITIVE DATA

This Broker call is used to pass data to the bulletin routine for supervisorsaccessing sensitive data and not creating an ASISTS case. 

Property | Value
--- | ---
Label | SENSDATA
Routine | [OOPSGUI7](http://code.osehra.org/dox/Routine_OOPSGUI7_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SDUZ | LITERAL |  | true | This is the DUZ of the supervisor accessing the Employee&#x27;s data.
EMP | LITERAL |  | true | This is the Employee&#x27;s name for which the sensitive date has been viewed.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}