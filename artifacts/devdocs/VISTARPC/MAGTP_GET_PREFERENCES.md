---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; MAGTP GET PREFERENCES
# MAGTP GET PREFERENCES

Get the user's setting/configuration preferences in XML format from the configuration file (#2006.13)

Property | Value
--- | ---
Label | GETUPREF
Routine | [MAGTP011](http://code.osehra.org/dox/Routine_MAGTP011_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ENT | LITERAL | 30 | true | DUZ^LABELDUZ of user whose preferences are to be retrievedLABEL of preference sectionIf DUZ is null, default to current DUZ



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}