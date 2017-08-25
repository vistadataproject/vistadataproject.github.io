---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU GET BOILERPLATE<br/>
# TIU GET BOILERPLATE

Returns a titles boilerplate.

## Properties

Property | Value
--- | ---
Label | TITLEBP
MUMPS Implementation | [TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL |  |  | Title IEN



## MUMPS Method Description

Property | Value
--- | ---
Method | [TITLEBP^TIUSRVT1](http://code.osehra.org/dox/Routine_TIUSRVT1_source.html)
Method Comment | Returns a Titles Boilerplate
Input Parameters | IEN
Code | {::nomarkdown}<pre><code> Q:+$G(IEN)'>0<br/> N I,IDX<br/> S (I,IDX)=0<br/> F  S IDX=$O(^TIU(8925.1,IEN,"DFLT",IDX)) Q:+IDX=0  D<br/> .S I=I+1<br/> .S Y(I)=^TIU(8925.1,IEN,"DFLT",IDX,0)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}