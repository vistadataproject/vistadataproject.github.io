---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XUS GET CCOW TOKEN 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XUS GET CCOW TOKEN{:/}
 tag | {::nomarkdown}CCOW{:/}
 routine | [XUSRB4](http://code.osehra.org/dox/Routine_XUSRB4_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC gets a token to save in the CCOW context to aid in sign-on.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | CCOW^[XUSRB4](http://code.osehra.org/dox/Routine_XUSRB4_source.html)
 Method comment | rpc. CCOW Auto Signon Handle
 Code | {::nomarkdown}  N HDL,HDL2,X<br> S RET(0)="NO PROXY USER",RET(1)="ERROR"<br> I $$USERTYPE^XUSAP(DUZ,"APPLICATION PROXY") Q  ;No Proxy<br> I $$USERTYPE^XUSAP(DUZ,"CONNECTOR PROXY") Q  ;No Proxy<br> S RET(0)="NOT AUTHENTICATED",RET(1)="ERROR"<br> I $G(DUZ("LOA"))=1 Q  ;Not an authenticated user<br> S X=$$ACTIVE^XUSER(DUZ) I 'X S RET(0)=X Q  ;User must be active<br> S HDL=$$HANDLE("XWBCCW",1)<br> S RET(0)="~2"_$$LOW^XLFSTR(HDL),RET(1)=$G(^XMB("NETNAME"))_"^"_$$STA^XUAF4(DUZ(2))<br> D TOK(HDL)<br> S ^XUTL("XQ",$J,"HDL")=HDL ;Save handle with job{:/}


### CPRS

[Executable Only]()


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:28:51 am</p>{:/}