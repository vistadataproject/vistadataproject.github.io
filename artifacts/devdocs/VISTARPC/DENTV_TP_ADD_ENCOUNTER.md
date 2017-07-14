---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTV TP ADD ENCOUNTER<br/>
# DENTV TP ADD ENCOUNTER

This will add a new record to the dental encounter file, 228.1

## Properties

Property | Value
--- | ---
Label | ADD
Routine | [DENTVTP2](http://code.osehra.org/dox/Routine_DENTVTP2_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LIST | 255 | true | DATA(sub) &#x3D; value  where    sub     Req  Description ---------  ---  ------------------------------------------------- &quot;PAT&quot;       x   DFN - pointer to patient file &quot;VISIT&quot;         pointer to visit file (#9000010) &quot;APPT&quot;          scheduled appointment Fileman date.time &quot;NEWAPPT&quot;       create visit, no scheduled appt or existing visit                 NOTE: VISIT supercedes APPT which supercedes NEWAPPT &quot;LOC&quot;       x   pointer to HOSPITAL LOCATION file (#44) &quot;PROV&quot;          primary provider - pointer to NEW PERSON file                 if not passed then use DUZ of existing user &quot;PATTYPE&quot;       I:inpatient; O:outpatient                    if not passed, then determine from MAS records &quot;DAS CAT&quot;   x   POINTER TO DENTAL CLASSIFICATION FILE (#220.2) &quot;DAS BED&quot;       POINTER TO DENTAL BED SECTION FILE (#220.4)                    required if patient an inpatient &quot;DAS DIV&quot;   x   station number &quot;DAS DIS&quot;   x   1:In progress; 2:Completed; 3:Terminated; &quot;FLAGS&quot;         3 bytes - each byte 0 or 1 - &lt;das&gt;&lt;des&gt;&lt;pce&gt;



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}