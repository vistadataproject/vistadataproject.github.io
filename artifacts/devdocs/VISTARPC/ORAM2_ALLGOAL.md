---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORAM2 ALLGOAL
# ORAM2 ALLGOAL

Returns the percentage of patients in the Anticoagulation Flowsheet file(#103) whose last INRs (within the specified number of days) were in-goal.

Property | Value
--- | ---
Label | ALLGOAL
Routine | [ORAM2](http://code.osehra.org/dox/Routine_ORAM2_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DAYS | LITERAL |  |  | NUMBER OF DAYS BACK TO INCLUDE A PT VISIT
CLINIC | LITERAL |  |  | IEN of Clinic in Hospital Location File.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}