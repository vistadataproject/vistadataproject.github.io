---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; XDR UPD SUPPR EMAIL
# XDR UPD SUPPR EMAIL

Used to remotely set the field SUPPRESS NEW DUP EMAIL (#99) on theDUPLICATE RESOLUTION file (#15.1). SUPPRESS NEW DUP EMAIL is set to 1 (Yes) to suppress the email that isnormally sent when a new record is added to the DUPLICATE RECORD file byPSIM (i.e., by a call from routine XDRDADDS) If SUPPRESS NEW DUP EMAIL is set to 0 (No) or null, the email will be sent.

Property | Value
--- | ---
Label | EN
Routine | [XDRDEFLG](http://code.osehra.org/dox/Routine_XDRDEFLG_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
FILE NUMBER | LITERAL | 20 | true | File number for the file that is the .01 field of a record in the DUPLICATE RESOLUTION file. This is the record that is to be updated by this RPC.
VALUE | LITERAL | 1 | true | Must be set to 1 or 0. This value will be put into the SUPPRESS NEW DUP EMAIL field.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}