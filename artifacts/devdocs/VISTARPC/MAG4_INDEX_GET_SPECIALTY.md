---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG4 INDEX GET SPECIALTY<br/>
# MAG4 INDEX GET SPECIALTY

This call will return an array of INDEX SPECIALTY/SUBSPECIALTIESbased on the input parameters CLS (Class)and EVENT (Procedure/Event)When images are displayed, it is desirable to limit thelist of presented images to only those that are likelyto be relevant in the current context. This procedure accepts an "image category" (either an IENor the name of a category) and returns all "(sub)specialties"that generate images in that category.

## Properties

Property | Value
--- | ---
Label | IGS
MUMPS Implementation | [MAGSIXGT](http://code.osehra.org/dox/Routine_MAGSIXGT_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
CLS | LITERAL | 90 | true | This parameter is a &#x27;,&#x27; (comma) delimited string of classesonly those specialties that match a &#x27;class&#x27; in the stringwill be listed in the result array.
EVENT | LITERAL | 50 | true | This is a &#x27;,&#x27;(comma) delimited string of Procedure/Eventsonly those Specialties associated with one of these Proc/Events will be listed in the output.
FLGS | LITERAL | 40 | true | ;  FLGS : An &#x27;^&#x27; delimited string;     1 IGN: Flag to IGNore the Status field;     2 INCL: Include Class in the Output string;     3 INST: Include Status in the Output String;     4 INSP: Include Specialty in the OutPut String



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}