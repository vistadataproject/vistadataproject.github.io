---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGV DGW ACTION UID LIST
# MAGV DGW ACTION UID LIST

Return list of UIDfrom DICOM UID SPECIFIC ACTION file (#2006.539)

Property | Value
--- | ---
Label | ACTUIDS
Routine | [MAGVDGWP](http://code.osehra.org/dox/Routine_MAGVDGWP_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
MAGTYPE | LITERAL |  | true | Type (e.g. &quot;SOP Class&quot;)
MAGSUBT | LITERAL |  | true | Subtype (e.g. &quot;Storage&quot;)
MAGACT | LITERAL |  | true | Action Type (e.g. &quot;Storage SCP&quot;)



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}