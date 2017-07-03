---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DVBAB SEND MSG
# DVBAB SEND MSG

Used to generate e-mail messages for specific CAPRI actions, such aschanging a C&P exam request.

Property | Value
--- | ---
Label | MSG
Routine | [DVBAB1](http://code.osehra.org/dox/Routine_DVBAB1_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VAL1 | LITERAL | 8 | true | This is the cancelling users DUZ.
VAL2 | LITERAL | 45 | true | This is the Subjecto of the message - XMSUB
VAL3 | LIST |  | true | This is the text of the message  -  XMTEXT
VAL4 | LITERAL | 30 | true | This is the mail group name  -  MGN
VAL5 | LITERAL | 15 | true | This is the 2507 request number



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}