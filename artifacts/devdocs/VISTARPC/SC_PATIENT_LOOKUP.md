---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; SC PATIENT LOOKUP<br/>
# SC PATIENT LOOKUP

Patient lookup.  This is intended as a temporary RPC until a VA orFileMan component is available.  Does a Multiple index lookup onthe PATIENT file (#2).  This does not invoke DPTLK.  Given lookupvalue, this returns a list of the form DFN^patient name^DOB^PID. Only the first 500 records that match the value are returned.

## Properties

Property | Value
--- | ---
Label | FINDP
Routine | [SCUTBK11](http://code.osehra.org/dox/Routine_SCUTBK11_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
LIST ATTRIBUTES | LIST | 512 | true | 



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}