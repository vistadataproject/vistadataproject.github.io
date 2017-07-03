---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DENTV GET CANNED COMMENTS
# DENTV GET CANNED COMMENTS

Returns the canned comments by provider, system, or both. The maximum number returned is 12. This limit is set by the GUI.

Property | Value
--- | ---
Label | GET
Routine | [DENTVCC](http://code.osehra.org/dox/Routine_DENTVCC_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PROV | LITERAL | 32 | true | Provider IEN.
TYP | LITERAL | 1 | true | Type returns either S-system,U-user/provider,A-Both.
CAT | LITERAL | 1 | true | Category of the canned statements.1-Radiographic Findings2-Summary Assessment3-Treatment Plan4-Patient Education5-Disposition



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}