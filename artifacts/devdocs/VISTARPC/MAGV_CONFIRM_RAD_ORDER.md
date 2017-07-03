---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGV CONFIRM RAD ORDER
# MAGV CONFIRM RAD ORDER

Returns a RAD/NUC MED ORDERS file (#75.1) IEN for a set of DICOM Unique Identifiers.

Property | Value
--- | ---
Label | CONFIRM
Routine | [MAGVIM06](http://code.osehra.org/dox/Routine_MAGVIM06_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
UIDS | LITERAL | 200 | true | Study, Series, and SOP Instance UID, &quot;&#x60;&quot;-delimited. Used by the Importer II applicationto verify the RAD/NUC MED ORDERS file (#75.1) IEN for an object which is determined tobe on file via a prior call to RPC: MAGV IMPORT STATUS.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}