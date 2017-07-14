---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWORDG GRPSEQB<br/>
# ORWORDG GRPSEQB

Returns expanded list of display groups.for the current site/user.

## Properties

Property | Value
--- | ---
Label | GRPSEQB
Routine | [ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [GRPSEQB^ORWORDG](http://code.osehra.org/dox/Routine_ORWORDG_source.html)
First Comment | {::nomarkdown}<pre><code> Call GRPSEQ, format for broker:<br/>   Y(n)=Ptr to Display Group ^ Sequence ^ Top Level Display Group Name</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N C,I,X<br/> D GRPSEQ(.X)<br/> S C=0,I=0<br/> F  S I=$O(X(I)) Q:I=""  S C=C+1,Y(C)=I_U_X(I)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}