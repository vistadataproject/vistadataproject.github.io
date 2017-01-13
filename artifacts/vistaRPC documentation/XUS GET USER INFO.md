---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XUS GET USER INFO 

 property | value 
--- | --- 
 label | {::nomarkdown}XUS GET USER INFO{:/}
 tag | {::nomarkdown}USERINFO{:/}
 routine | [XUSRB2](http://code.osehra.org/dox/Routine_XUSRB2_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns information about a user after logon. {:/}


### Method description

 property | value 
 --- | --- 
 Method comment | generic user information for seeding VistaUser object.
 Lines | ```
 N %,XU1,XU5
 S RET(0)=DUZ
 F %=1:1:6 S RET(%)="unk"
 I DUZ'>0 S XWBSEC="User not fully sign-on" Q
 S XU1=^VA(200,DUZ,0),XU5=$G(^(5))
 S RET(1)=$P(XU1,"^") ;.01 User name.
 S RET(2)=$$NAME^XUSER(DUZ) ;Return standard name.
 S RET(3)=DUZ(2)_"^"_$$NS^XUAF4(DUZ(2))
 S %=+$P(XU1,U,9),RET(4)=$P($G(^DIC(3.1,%,0)),U) ;Title
 S %=+XU5,RET(5)=$P($G(^DIC(49,%,0)),U) ;Service/Section
 S RET(6)=$G(DUZ("LANG")) ;User language
 S RET(7)=DTIME ;Users DTIME
 S RET(8)=$$VPID^XUPS(DUZ) ;Return VPID
```
 Leading comment lines | {::nomarkdown}Entry point for 'XUS GET USER INFO' RPC{:/}




 Generated on January 13th 2017, 6:55:29 am