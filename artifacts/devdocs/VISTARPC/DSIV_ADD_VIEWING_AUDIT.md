---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIV ADD VIEWING AUDIT<br/>
# DSIV ADD VIEWING AUDIT

Add "viewing" audit entry to 19625, with minimum data. This rpc verifies that the user checked to see whether a buffer entry was needed for an appt.  Buffer IEN will be set to 0. input is DATA("DFN") - required, pointer to the patient file         DATA("LOC") - required, free text clinic location         DATA("APDT")- required, appt date return -1^error message  or ien of entry

## Properties

Property | Value
--- | ---
Label | AAUDIT
Routine | [DSIVIC2](http://code.osehra.org/dox/Routine_DSIVIC2_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LIST |  | true | DATA(&quot;DFN&quot;), DATA(&quot;LOC&quot;) and DATA(&quot;APDT&quot;) are required.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}