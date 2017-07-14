---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XUS GET USER INFO<br/>
# XUS GET USER INFO

Returns information about a user after logon. 

## Properties

Property | Value
--- | ---
Label | USERINFO
Routine | [XUSRB2](http://code.osehra.org/dox/Routine_XUSRB2_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [USERINFO^XUSRB2](http://code.osehra.org/dox/Routine_XUSRB2_source.html)
Method Comment | generic user information for seeding VistaUser object.
First Comment | {::nomarkdown}<pre><code>Entry point for 'XUS GET USER INFO' RPC</code></pre>{:/}
Code | {::nomarkdown}<pre><code> N %,XU1,XU5<br/> S RET(0)=DUZ<br/> F %=1:1:6 S RET(%)="unk"<br/> I DUZ'>0 S XWBSEC="User not fully sign-on" Q<br/> S XU1=^VA(200,DUZ,0),XU5=$G(^(5))<br/> S RET(1)=$P(XU1,"^") ;.01 User name.<br/> S RET(2)=$$NAME^XUSER(DUZ) ;Return standard name.<br/> S RET(3)=DUZ(2)_"^"_$$NS^XUAF4(DUZ(2))<br/> S %=+$P(XU1,U,9),RET(4)=$P($G(^DIC(3.1,%,0)),U) ;Title<br/> S %=+XU5,RET(5)=$P($G(^DIC(49,%,0)),U) ;Service/Section<br/> S RET(6)=$G(DUZ("LANG")) ;User language<br/> S RET(7)=DTIME ;Users DTIME<br/> S RET(8)=$$VPID^XUPS(DUZ) ;Return VPID<br/></code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Executable Only | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}