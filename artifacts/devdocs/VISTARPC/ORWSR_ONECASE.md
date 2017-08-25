---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWSR ONECASE<br/>
# ORWSR ONECASE

Given a TIU document IEN, return the surgical case record and all otherdocuments related to the case, for display in the GUI treeview.

## Properties

Property | Value
--- | ---
Label | ONECASE
MUMPS Implementation | [ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
TIUDA | LITERAL | 16 | true | Document IEN in file 8925.



## MUMPS Method Description

Property | Value
--- | ---
Method | [ONECASE^ORWSR](http://code.osehra.org/dox/Routine_ORWSR_source.html)
Method Comment | Given a TIU document, return the case and related documents
Input Parameters | ORTIUDA
Code | {::nomarkdown}<pre><code> Q:'$$PATCH^XPDUTL("SR*3.0*100")!(+$G(ORTIUDA)=0)<br/> N ORCASE<br/> D GET1405^TIUSRVR(.ORCASE,ORTIUDA)<br/> I +ORCASE'>0 S ORY=ORCASE Q<br/> D GETONE(.ORY,+ORCASE)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rSurgery.pas">rSurgery.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}