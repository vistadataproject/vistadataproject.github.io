---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF INP INVOICE CHECK
# DSIF INP INVOICE CHECK

Pass in the IEN of the 7078 or the 583 file, and the file (7078 or 583) Returns the Invoice number(s) linked to the 7078 or 583 if one exists.

Property | Value
--- | ---
Label | INVCHK
Routine | [DSIFUTL](http://code.osehra.org/dox/Routine_DSIFUTL_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 25 | true | IEN of file 7078 or 583.
FILE | LITERAL | 4 | true |  Must be &quot;583&quot; (Unauthorized)     or &quot;7078&quot; (CH)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}