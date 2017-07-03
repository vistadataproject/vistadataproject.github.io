---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DENTV TP FILE TOOTH NOTE
# DENTV TP FILE TOOTH NOTE

This will allow you to add, update, or delete a record in file 228.6

Property | Value
--- | ---
Label | NOTE
Routine | [DENTVTP6](http://code.osehra.org/dox/Routine_DENTVTP6_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LIST | 256 | true | DATA(1) &#x3D; $STARTDATA(2) &#x3D; FLG ^ IEN ^ DFN ^ DATE ^ TOOTH ^ PLAN  if $G(FLG)&#x3D;&quot;&quot;,$G(IEN)&lt;1 then default to ADD  FLG - optional - A add new note                   U replace existing text                   D delete note for this patient,date,tooth  IEN - opt/req  - pointer to TP NOTE file (#228.6) required for Update or                   Delete  DFN - required - pointer to the patient file DATE - optional - external date (time not allowed) default to todayTOOTH - required - 0, 1-32, 99            DATA(n) &#x3D; text of note   where n &#x3D;3,4,5,6,...DATA(n) &#x3D; $END



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}