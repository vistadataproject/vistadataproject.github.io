---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XUS GET USER INFO 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XUS GET USER INFO{:/}
 tag | {::nomarkdown}USERINFO{:/}
 routine | [XUSRB2](http://code.osehra.org/dox/Routine_XUSRB2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns information about a user after logon. {:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | USERINFO^[XUSRB2](http://code.osehra.org/dox/Routine_XUSRB2_source.html)
 Method comment | generic user information for seeding VistaUser object.
 First comment | {::nomarkdown}<pre>Entry point for 'XUS GET USER INFO' RPC</pre>{:/}
 Code | {::nomarkdown}  N %,XU1,XU5<br> S RET(0)=DUZ<br> F %=1:1:6 S RET(%)="unk"<br> I DUZ'>0 S XWBSEC="User not fully sign-on" Q<br> S XU1=^VA(200,DUZ,0),XU5=$G(^(5))<br> S RET(1)=$P(XU1,"^") ;.01 User name.<br> S RET(2)=$$NAME^XUSER(DUZ) ;Return standard name.<br> S RET(3)=DUZ(2)_"^"_$$NS^XUAF4(DUZ(2))<br> S %=+$P(XU1,U,9),RET(4)=$P($G(^DIC(3.1,%,0)),U) ;Title<br> S %=+XU5,RET(5)=$P($G(^DIC(49,%,0)),U) ;Service/Section<br> S RET(6)=$G(DUZ("LANG")) ;User language<br> S RET(7)=DTIME ;Users DTIME<br> S RET(8)=$$VPID^XUPS(DUZ) ;Return VPID<br>{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code |  [Executable Only]()


{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 20th 2017, 4:54:06 am</p>{:/}