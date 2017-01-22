---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; XUS CVC 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}XUS CVC{:/}
 tag | {::nomarkdown}CVC{:/}
 routine | [XUSRB](http://code.osehra.org/dox/Routine_XUSRB_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}This RPC is used as part of Kernel to allow the user to change thereverify code.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | CVC^[XUSRB](http://code.osehra.org/dox/Routine_XUSRB_source.html)
 Method comment | change VC, Return 0 = success
 Input parameters | {::nomarkdown}XU1{:/}
 Code | {::nomarkdown}  N XU2,XU3,XU4 S DUZ=$G(DUZ),RET(0)=99,XU4=$$STATE^XWBSEC("XUS DUZ") S:(DUZ=0)&(XU4>0) DUZ=XU4 Q:DUZ'>0<br> S U="^",XU2=$P(XU1,U,2),XU3=$P(XU1,U,3),XU1=$P(XU1,U)<br> S XU1=$$DECRYP^XUSRB1(XU1),XU2=$$DECRYP^XUSRB1(XU2),XU3=$$DECRYP^XUSRB1(XU3)<br> S XU3=$$BRCVC^XUS2(XU1,XU2),RET(0)=+XU3,RET(1)=$P(XU3,U,2,9)<br> I XU3>0 S DUZ=0 ;Clean-up if not changed.<br> I 'XU3,XU4 D KILL^XWBSEC("XUS DUZ"),POST2{:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="">Executable Only</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:10:56 am</p>{:/}