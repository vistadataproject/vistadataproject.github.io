---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XUS GET TOKEN<br/>
# XUS GET TOKEN



## Properties

Property | Value
--- | ---
Label | ASH
MUMPS Implementation | [XUSRB4](http://code.osehra.org/dox/Routine_XUSRB4_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [ASH^XUSRB4](http://code.osehra.org/dox/Routine_XUSRB4_source.html)
Method Comment | rpc. Auto Signon Handle
Code | {::nomarkdown}<pre><code> N HDL<br/> S RET="NOT AUTHENTICATED"<br/> I $G(DUZ)<1 Q  ;Not an authenticated user<br/> I $G(DUZ("LOA"))=1 Q  ;Not an authenticated user<br/> S HDL=$$HANDLE("XWBAS",1),RET="~1"_HDL<br/> D TOK(HDL)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Executable Only | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}