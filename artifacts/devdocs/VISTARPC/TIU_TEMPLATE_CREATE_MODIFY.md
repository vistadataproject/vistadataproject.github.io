---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU TEMPLATE CREATE MODIFY<br/>
# TIU TEMPLATE CREATE MODIFY

This remote procedure allows creation and update of Templates.

## Properties

Property | Value
--- | ---
Label | SETTMPLT
Routine | [TIUSRVT](http://code.osehra.org/dox/Routine_TIUSRVT_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL |  | true | This optional parameter is the record number of the Template to bemodified. If the Template is new, it may be passed as zero or null, toindicate that a new Template is to be created.
TIUX | LIST |  | true | This array contains the data to be filed in the Template entry,subscripted by field number. It should look something like this: TIUX(.01)&#x3D;&quot;ACTIVE MEDICATIONS&quot;TIUX(.03)&#x3D;&quot;T&quot;TIUX(.04)&#x3D;&quot;A&quot;TIUX(.05)&#x3D;0TIUX(.06)&#x3D;&quot;&quot;TIUX(2,1,0)&#x3D;&quot;Active Medications:&quot;TIUX(2,2,0)&#x3D;&quot;|AMED|&quot;




## CPRS

File Type | Description
--- | ---
Executable Only | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}