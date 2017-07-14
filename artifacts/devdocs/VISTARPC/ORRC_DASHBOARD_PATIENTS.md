---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORRC DASHBOARD PATIENTS<br/>
# ORRC DASHBOARD PATIENTS

This call returns a list of patients with recent activity or items thatneed attention for the specified user.

## Properties

Property | Value
--- | ---
Label | MAIN
Routine | [ORRCDPT](http://code.osehra.org/dox/Routine_ORRCDPT_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
USER | LITERAL |  | true | This is the pointer to the user in the New Person file #200.
LIST | LIST |  | true | These are the lists from which to return patients with data, in the form &quot;type:ien:clinic start:clinic stop&quot; where  Provider list &#x3D; &quot;p:&lt;ien in New Person file #200&gt;&quot;OE/RR Team list &#x3D; &quot;t:&lt;ien in OE/RR List file #100.21&gt;&quot; Specialty list &#x3D; &quot;s:&lt;ien in Facility Treating Specialty file #45.7&gt;&quot;      Ward list &#x3D; &quot;w:&lt;ien in Ward Location file #42&gt;&quot;    Clinic list &#x3D; &quot;c:&lt;ien in Hospital Location file #44&gt;:&lt;Start&gt;:&lt;Stop&gt;&quot;                    where Start and Stop are FileMan-compatible dates
TYPE | LITERAL |  | true | This is the type of dashboard view desired, (C)linician or (N)urse.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}