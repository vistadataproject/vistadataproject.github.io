---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; XUS GET TOKEN
# XUS GET TOKEN



Property | Value
--- | ---
Label | ASH
Routine | [XUSRB4](http://code.osehra.org/dox/Routine_XUSRB4_source.html)
Return Type | SINGLE VALUE




### MUMPS Method Description

Property | Value
--- | ---
Method | [ASH^XUSRB4](http://code.osehra.org/dox/Routine_XUSRB4_source.html)
Method Comment | rpc. Auto Signon Handle
Code | {::nomarkdown}<pre><code> N HDL<br/> S RET="NOT AUTHENTICATED"<br/> I $G(DUZ)<1 Q  ;Not an authenticated user<br/> I $G(DUZ("LOA"))=1 Q  ;Not an authenticated user<br/> S HDL=$$HANDLE("XWBAS",1),RET="~1"_HDL<br/> D TOK(HDL)</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Executable Only | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}