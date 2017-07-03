---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DENTV DELETE HISTORY ENTRY
# DENTV DELETE HISTORY ENTRY

This will mark records in file 228.1 as deleted.   Through indexes on theDATE DELETED field in file 228.1, the associated transactions in file228.2 will be marked as deleted.  Since these two files are considered part of the official medical record, then, according to HIPAA, once a permenant record has been filed, it cannot be deleted unless an audit trail is maintained.  So we will keep these deleted records in these two files but will mark the records as having been deleted.

Property | Value
--- | ---
Label | DELH
Routine | [DENTVRHD](http://code.osehra.org/dox/Routine_DENTVRHD_source.html)
Return Type | SINGLE VALUE


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 10 | true | This is the internal entry number in file 228.1 to be deleted
REASON | LITERAL | 80 | true | You can provide a reason as to why this record was deleted.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}