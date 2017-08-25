---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; MAGV FIND STUDY TIU<br/>
# MAGV FIND STUDY TIU

This RPC returns the TIU note with which an image study is associatedif the study is associated with a consult procedure and a TIU noteexists for the consult.

## Properties

Property | Value
--- | ---
Label | TIUCHK
MUMPS Implementation | [MAGVRS43](http://code.osehra.org/dox/Routine_MAGVRS43_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
STYIEN | LITERAL | 15 | true | This is an internal entry number on the IMAGE STUDY File (#2005.63).



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}