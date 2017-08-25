---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORRC PHY DASHBD PATIENTS<br/>
# ORRC PHY DASHBD PATIENTS

This call returns a list of patients with recent activity (new resultsor ADT movements) or items that need attention (tasks that are due orunsigned orders and notes) for the specified user.

## Properties

Property | Value
--- | ---
Label | EN
MUMPS Implementation | [ORRCDPT](http://code.osehra.org/dox/Routine_ORRCDPT_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
USER | LITERAL |  | true | This is the pointer to the user in the New Person file #200.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}