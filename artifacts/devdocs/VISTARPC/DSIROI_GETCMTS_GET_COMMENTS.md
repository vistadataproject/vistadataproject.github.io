---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; DSIROI GETCMTS GET COMMENTS<br/>
# DSIROI GETCMTS GET COMMENTS

This routine can return a set of comments including patient comments from the 5345, internal comments, and alerts. 

## Properties

Property | Value
--- | ---
Label | GETCMTS
MUMPS Implementation | [DSIROI](http://code.osehra.org/dox/Routine_DSIROI_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
IEN | LITERAL | 60 | true | IEN &#x3D; Request internal number      or       If SEL &#x3D; &quot;R&quot; This is the patient DFN
SEL | LITERAL | 5 | true |  SEL &#x3D; COMMENT SELECTION (required)     This is a string that will select what type of comments to return        I &#x3D; INTERNAL COMMENTS (.32 FIELD)       P &#x3D; PATIENT COMMENTS (.31 FIELD)       A &#x3D; ALERTS FROM 19620.98       R &#x3D; PATIENT RECORD - In this case the IEN is the patient DFN.           If R is selected, it must be the only selection.      If more than one type of comment is desired, send the selection in a     carrot delimited string (ie. &#x27;A^P^I&#x27;). The data will be returned in     the order it is requested.



{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}