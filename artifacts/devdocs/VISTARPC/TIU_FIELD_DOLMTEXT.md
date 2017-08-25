---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU FIELD DOLMTEXT<br/>
# TIU FIELD DOLMTEXT

Reads through an array of text and converts all entries of templatefields to their assocaited List Manager text values.

## Properties

Property | Value
--- | ---
Label | DOLMTEXT
MUMPS Implementation | [TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIULIST | LIST |  |  | Input text to search for template fields.



## MUMPS Method Description

Property | Value
--- | ---
Method | [DOLMTEXT^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
Method Comment | finds Template Fields and replaces with LM Text
Input Parameters | TIULIST
Code | {::nomarkdown}<pre><code> N I,LINE<br/> S I=0<br/> F  S I=$O(TIULIST(I)) Q:'I  D<br/> . S TIUY(I)=$$DOLMLINE(TIULIST(I,0))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}