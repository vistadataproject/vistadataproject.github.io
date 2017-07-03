---
layout: default
title: VISTA RPC Documentation
---

## [VISTA RPCs](TableOfContents) &#8594; XUS GET CCOW TOKEN
# XUS GET CCOW TOKEN

This RPC gets a token to save in the CCOW context to aid in sign-on.

Property | Value
--- | ---
Label | CCOW
Routine | [XUSRB4](http://code.osehra.org/dox/Routine_XUSRB4_source.html)
Return Type | ARRAY




### MUMPS Method Description

Property | Value
--- | ---
Method | [CCOW^XUSRB4](http://code.osehra.org/dox/Routine_XUSRB4_source.html)
Method Comment | rpc. CCOW Auto Signon Handle
Code | {::nomarkdown}<pre><code> N HDL,HDL2,X<br/> S RET(0)="NO PROXY USER",RET(1)="ERROR"<br/> I $$USERTYPE^XUSAP(DUZ,"APPLICATION PROXY") Q  ;No Proxy<br/> I $$USERTYPE^XUSAP(DUZ,"CONNECTOR PROXY") Q  ;No Proxy<br/> S RET(0)="NOT AUTHENTICATED",RET(1)="ERROR"<br/> I $G(DUZ("LOA"))=1 Q  ;Not an authenticated user<br/> S X=$$ACTIVE^XUSER(DUZ) I 'X S RET(0)=X Q  ;User must be active<br/> S HDL=$$HANDLE("XWBCCW",1)<br/> S RET(0)="~2"_$$LOW^XLFSTR(HDL),RET(1)=$G(^XMB("NETNAME"))_"^"_$$STA^XUAF4(DUZ(2))<br/> D TOK(HDL)<br/> S ^XUTL("XQ",$J,"HDL")=HDL ;Save handle with job</code></pre>{:/}



### CPRS

File Type | Description
--- | ---
Executable Only | {::nomarkdown}N/A{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 3rd 2017, 12:09:02 pm</p>{:/}