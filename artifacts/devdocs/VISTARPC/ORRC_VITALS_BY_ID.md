---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORRC VITALS BY ID<br/>
# ORRC VITALS BY ID

This call returns the details of the measurement sets requested in thelist of ID's passed in.

## Properties

Property | Value
--- | ---
Label | DETAIL
MUMPS Implementation | [ORRCVIT](http://code.osehra.org/dox/Routine_ORRCVIT_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
VITALS | LIST |  | true | This is the list of measurement set identifiers, as VIT:ID where ID isPatient#_&quot;;&quot;_Date.Time as returned by the patient list RPCs.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}