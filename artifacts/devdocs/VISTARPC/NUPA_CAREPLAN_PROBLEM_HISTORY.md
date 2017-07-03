---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; NUPA CAREPLAN PROBLEM HISTORY
# NUPA CAREPLAN PROBLEM HISTORY

Provides the history for a selected problem & intervention in a patient's care plan for the current admission.

Property | Value
--- | ---
Label | HIST
Routine | [NUPABCL1](http://code.osehra.org/dox/Routine_NUPABCL1_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DA  | LITERAL |  | true | Three piece variable.  Pieces are: 1. IEN of problem from file 1927.2. 2. IEN of intervention from file 1927.24. 3. IEN of the Care Plan from file 1927.4.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}