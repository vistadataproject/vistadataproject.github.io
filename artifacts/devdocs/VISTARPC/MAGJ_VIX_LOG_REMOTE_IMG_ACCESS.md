---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGJ VIX LOG REMOTE IMG ACCESS<br/>
# MAGJ VIX LOG REMOTE IMG ACCESS

Log ViX-enabled Remote Image Access Events.

## Properties

Property | Value
--- | ---
Label | LOGRIA
MUMPS Implementation | [MAGJVAPI](http://code.osehra.org/dox/Routine_MAGJVAPI_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DATA | LITERAL | 256 | true | CARET DELIMITED AS FOLLOWS:  ^01: ACTION ... &quot;VR-RV&quot;_ subset member from ACTION+1^MAGGTAU  ^02: RADFN .... IEN of PATIENT file (#2)  ^03: MAGIEN ... IEN of IMAGE file (#2005)  ^04: NIMGS .... VRad Image Count  ^05: REMOTE ... VRad Remote Read Flag  ^06: MAGJVRV .. VRad Version  ^07: USERCLS .. VRad User Class  ^08: VIXTXID .. VRad VIX Transaction ID



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}