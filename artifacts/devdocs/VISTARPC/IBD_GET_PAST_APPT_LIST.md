---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; IBD GET PAST APPT LIST<br/>
# IBD GET PAST APPT LIST

This RPC can be used to return a list of appointments for a patient.  Itdefaults to returning the past 1 year's kept appointments.

## Properties

Property | Value
--- | ---
Label | APPTLST
MUMPS Implementation | [IBDFRPC5](http://code.osehra.org/dox/Routine_IBDFRPC5_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IBDF | LIST | 30 | true | Requires the variable IBDF(&quot;DFN&quot;) be set to the patient internal entry number.IBDF(&quot;F&quot;) is the from date (defaults to t-1year)IBDF(&quot;T&quot;) is the to date (defaults to t@midnight)IBDF(&quot;W&quot;) is the types of appointments to return, see SDA^VAPDT



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}