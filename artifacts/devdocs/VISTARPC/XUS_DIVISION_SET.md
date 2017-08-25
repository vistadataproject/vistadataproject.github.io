---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XUS DIVISION SET<br/>
# XUS DIVISION SET

This RPC is used to set the user's selected Division in DUZ(2) duringsign-on.

## Properties

Property | Value
--- | ---
Label | DIVSET
MUMPS Implementation | [XUSRB2](http://code.osehra.org/dox/Routine_XUSRB2_source.html)
Return Type | SINGLE VALUE


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DIV | LITERAL | 12 | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [DIVSET^XUSRB2](http://code.osehra.org/dox/Routine_XUSRB2_source.html)
Method Comment | Set users Division
Input Parameters | DIV
Code | {::nomarkdown}<pre><code> S RET=0,DIV=$$FIND1^DIC(200.02,","_DUZ_",","MX",$G(DIV))<br/> Q:DIV'>0<br/> N X<br/> I '$D(^VA(200,DUZ,2,DIV,0)) Q<br/> S RET=1 ;1=set, 0=not set<br/> D UPDIV(+DIV) ;Update Sign-on log</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Executable Only | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}