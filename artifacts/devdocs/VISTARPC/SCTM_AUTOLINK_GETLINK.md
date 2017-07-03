---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; SCTM AUTOLINK GETLINK
# SCTM AUTOLINK GETLINK

This rpc returns the list of Team names that are autolinked to an entity.

Property | Value
--- | ---
Label | GETLINK
Routine | [SCAPMCU3](http://code.osehra.org/dox/Routine_SCAPMCU3_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
AUOTLINK TYPE | LITERAL | 20 | true | Possible types of autolinks are the following: - Ward - Specialty - Room-Bed - Practitioner - Clinic
AUTOLINK IEN | LITERAL | 20 | true | Internal entry number of autoLink entity.For example, if the entity is a ward, this parameter containsthe entry number in the Ward Loaction file for the entity.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}