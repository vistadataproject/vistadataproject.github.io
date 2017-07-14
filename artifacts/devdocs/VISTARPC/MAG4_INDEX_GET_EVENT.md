---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG4 INDEX GET EVENT<br/>
# MAG4 INDEX GET EVENT

This call will return an array of INDEX PROCEDURE/EVENT(s)based on the input parameters CLS (Class)and SPEC (Specialty/subspecialty)When images are displayed, it is desirable to limit thelist of presented images to only those that are likelyto be relevant in the current context. This procedure accepts an "image category" (either an IENor the name of a category) and returns all "image events"that belong to that category.

## Properties

Property | Value
--- | ---
Label | IGE
Routine | [MAGSIXGT](http://code.osehra.org/dox/Routine_MAGSIXGT_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CLS | LITERAL | 90 | true | This parameter is a &#x27;,&#x27; (comma) delimited string of classesonly those index types, that match a &#x27;class&#x27; in the stringwill be returned in the array
FLGS | LITERAL | 40 | true | ;  FLGS : An &#x27;^&#x27; delimited string;     1 IGN: Flag to IGNore the Status field;     2 INCL: Include Class in the Output string;     3 INST: Include Status in the Output String
SPEC | LITERAL | 60 | true | This is a comma delimited list of Specialty/SubSpecialtiesOnly Procedure/Events that are associated with one of these will bereturned in the list.If a Procedure/Event is not associated with any Specialty/Subspecialtiesit is considered valid for all, and will be returned.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}