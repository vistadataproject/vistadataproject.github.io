---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGV INACTIVATE SOP
# MAGV INACTIVATE SOP

This RPC inactivates a SOP INSTANCE entry in the IMAGE SOP INSTANCE file (#2005.64).

Property | Value
--- | ---
Label | INSOP
Routine | [MAGVRS24](http://code.osehra.org/dox/Routine_MAGVRS24_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
SOPIEN | LITERAL |  |  | The IEN of the SOP entry to be inactivated.
SERIEN | LITERAL |  |  | The IEN of the related series IEN.
OVERRIDE | LITERAL |  |  | If set to 1 this flag prevents the checking of the parent procedurereference prior to inactivation.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}