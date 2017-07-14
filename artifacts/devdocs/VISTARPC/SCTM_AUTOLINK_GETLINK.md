---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SCTM AUTOLINK GETLINK<br/>
# SCTM AUTOLINK GETLINK

This rpc returns the list of Team names that are autolinked to an entity.

## Properties

Property | Value
--- | ---
Label | GETLINK
Routine | [SCAPMCU3](http://code.osehra.org/dox/Routine_SCAPMCU3_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
AUOTLINK TYPE | LITERAL | 20 | true | Possible types of autolinks are the following: - Ward - Specialty - Room-Bed - Practitioner - Clinic
AUTOLINK IEN | LITERAL | 20 | true | Internal entry number of autoLink entity.For example, if the entity is a ward, this parameter containsthe entry number in the Ward Loaction file for the entity.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}