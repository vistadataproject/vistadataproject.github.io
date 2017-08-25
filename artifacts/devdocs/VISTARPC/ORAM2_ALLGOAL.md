---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORAM2 ALLGOAL<br/>
# ORAM2 ALLGOAL

Returns the percentage of patients in the Anticoagulation Flowsheet file(#103) whose last INRs (within the specified number of days) were in-goal.

## Properties

Property | Value
--- | ---
Label | ALLGOAL
MUMPS Implementation | [ORAM2](http://code.osehra.org/dox/Routine_ORAM2_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DAYS | LITERAL |  |  | NUMBER OF DAYS BACK TO INCLUDE A PT VISIT
CLINIC | LITERAL |  |  | IEN of Clinic in Hospital Location File.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}