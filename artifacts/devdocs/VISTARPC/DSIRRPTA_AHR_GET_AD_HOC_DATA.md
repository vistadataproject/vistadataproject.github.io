---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIRRPTA AHR GET AD HOC DATA<br/>
# DSIRRPTA AHR GET AD HOC DATA

This calls schedules or runs an ad hoc report and returns the taskinformation or the report data.

## Properties

Property | Value
--- | ---
Label | AHR
Routine | [DSIRRPTA](http://code.osehra.org/dox/Routine_DSIRRPTA_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
INARRAY | LIST | 200 | true | Input Parameter(s) - ARRAY AS FOLLOWS:  &quot;FIELD1_IEN^FIELD2_IEN^...^FIELDn_IEN       (REQUIRED-VARIABLE NUMBER OF FIELDS)  FILTER/SELECTION FIELDS (OPTIONAL)  &quot;F1&quot;^F1_IEN^F1_VALUE  &quot;F2&quot;^F2_IEN^F1_VALUE  &quot;F3&quot;^F3_IEN^F1_VALUE  DATE RANGE FIELDS (OPTIONAL)  &quot;R1&quot;^R1_IEN^F1_VALUE1^F1_VALUE2  &quot;R2&quot;^R2_IEN^R2_VALUE2^R2_VALUE2^[&quot;A&quot;|&quot;O&quot;] (&quot;A&quot;&#x3D;And &quot;O&quot;&#x3D;Or)  SORT FIELDS (OPTIONAL)  &quot;S1&quot;^S1_IEN^[&quot;A&quot;|&quot;D&quot;] (&quot;A - ASCENDING IS THE DEFAULT, &quot;D&quot; - DESCENDING)  &quot;S2&quot;^S2_IEN^[&quot;A&quot;|&quot;D&quot;] (&quot;A - ASCENDING IS THE DEFAULT, &quot;D&quot; - DESCENDING)  &quot;S3&quot;^S3_IEN^[&quot;A&quot;|&quot;D&quot;] (&quot;A - ASCENDING IS THE DEFAULT, &quot;D&quot; - DESCENDING)
SCHED | LITERAL | 1 | true | This is an optional boolean field to indicate whether of not the reportshould be scheduled.
ESTART | LITERAL | 15 | true | This is the earliest start time for a task to launch if the report isscheduled.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}