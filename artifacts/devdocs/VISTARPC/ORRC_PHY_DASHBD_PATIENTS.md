---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; ORRC PHY DASHBD PATIENTS
# ORRC PHY DASHBD PATIENTS

This call returns a list of patients with recent activity (new resultsor ADT movements) or items that need attention (tasks that are due orunsigned orders and notes) for the specified user.

Property | Value
--- | ---
Label | EN
Routine | [ORRCDPT](http://code.osehra.org/dox/Routine_ORRCDPT_source.html)
Return Type | GLOBAL ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
USER | LITERAL |  | true | This is the pointer to the user in the New Person file #200.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}