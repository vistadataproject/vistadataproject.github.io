---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAG3 LOGACTION<br/>
# MAG3 LOGACTION

Certain actions performed by a user are tracked for statistical purposesin the IMAGING WINDOWS SESSIONS and IMAGING WINDOWS WORKSTATIONS files.

## Properties

Property | Value
--- | ---
Label | LOGACT
MUMPS Implementation | [MAGGTAU](http://code.osehra.org/dox/Routine_MAGGTAU_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
ACTION | LITERAL | 256 | true | LOGACT calls ACTION^MAGGTAU to log action.        ; ACTIONS LOGGED        ; LOGON - Session StartTime     LOGOFF - Session End Time        ; IMG   - Image accessed        PAT    - Patient Accessed        ; CAP   - Image Captured        MOD    - Image entry modified        ;        ; ACTION is &quot;^&quot; delimited string        ; $P(1) is code ( see above )   $P(2) is DFN        ; $P(3) is Image IEN



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}