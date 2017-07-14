---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XUS CVC<br/>
# XUS CVC

This RPC is used as part of Kernel to allow the user to change thereverify code.

## Properties

Property | Value
--- | ---
Label | CVC
Routine | [XUSRB](http://code.osehra.org/dox/Routine_XUSRB_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [CVC^XUSRB](http://code.osehra.org/dox/Routine_XUSRB_source.html)
Method Comment | change VC, Return 0 &#x3D; success
Input Parameters | XU1
Code | {::nomarkdown}<pre><code> N XU2,XU3,XU4 S DUZ=$G(DUZ),RET(0)=99,XU4=$$STATE^XWBSEC("XUS DUZ") S:(DUZ=0)&(XU4>0) DUZ=XU4 Q:DUZ'>0<br/> S U="^",XU2=$P(XU1,U,2),XU3=$P(XU1,U,3),XU1=$P(XU1,U)<br/> S XU1=$$DECRYP^XUSRB1(XU1),XU2=$$DECRYP^XUSRB1(XU2),XU3=$$DECRYP^XUSRB1(XU3)<br/> S XU3=$$BRCVC^XUS2(XU1,XU2),RET(0)=+XU3,RET(1)=$P(XU3,U,2,9)<br/> I XU3>0 S DUZ=0 ;Clean-up if not changed.<br/> I 'XU3,XU4 D KILL^XWBSEC("XUS DUZ"),POST2</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Executable Only | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}