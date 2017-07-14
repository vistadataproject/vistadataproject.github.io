---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DENTVICD LIST<br/>
# DENTVICD LIST

This will return a list of active ICD codes for a lookup value.

## Properties

Property | Value
--- | ---
Label | LIST
Routine | [DENTVICD](http://code.osehra.org/dox/Routine_DENTVICD_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DENTVA | LIST |  | true | An input array &quot;DENTVA&quot; will have to be set up in following format:   DENTVA(0) &#x3D; &quot;LOOKUP^Value&quot;      user input lookup value  DENTVA(1) &#x3D; &quot;CHKSCR^Value&quot;      If value set to &quot;P&quot;, only valid ICD9 codes that are eligible to be      principle diagnosis will be returned.  DENTVA(2) &#x3D; &quot;ACTDATE^Value&quot;       (ACTDATE is in Fileman format, NULL dates will be set to Today)      The visit date of the ICD code.  DENTVA(3) &#x3D; &quot;MAX^Value&quot; (100 is the default)         The maximum number of diagnosis you want returned.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}