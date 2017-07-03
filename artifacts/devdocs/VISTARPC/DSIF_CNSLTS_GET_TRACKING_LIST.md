---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; DSIF CNSLTS GET TRACKING LIST
# DSIF CNSLTS GET TRACKING LIST

This RPC returns a list of Consults captured through HL7 that are from a defined Fee Service/Specialty, and have been updated through a Consult action. Those actions include, Comment, Forward, Edit/Resubmit, Complete, Forward, Significant Findings, Cancel/Deny, or Discontinue.

Property | Value
--- | ---
Label | CNSTRAK
Routine | [DSIFCNS](http://code.osehra.org/dox/Routine_DSIFCNS_source.html)
Return Type | ARRAY


### Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DSIFSVC | LITERAL |  | true | This input parameter is the Service/Specialty IEN for the service in which you want a list of Consult details returned.
DSIFLIEN | LITERAL |  |  | This is the last IEN returned, if the list contains more than 100records. By passing in this value, which should be the last IEN returned in a previous call, it will grab the next 100 records, or until there are no additional records.
DSIFSCR | LITERAL |  |  |  If passed, determines which form of screening should be used to determine whether the user can view the selected service. If not passed (or passed as &quot;&quot;), no screening will be performed.  Allowed values are:    N - Consult Notification screen    U - Consult Parameter screening by user precedence



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}