---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWU16 VALIDSIG<br/>
# ORWU16 VALIDSIG



## Properties

Property | Value
--- | ---
Label | VALIDSIG
MUMPS Implementation | [ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [VALIDSIG^ORWU16](http://code.osehra.org/dox/Routine_ORWU16_source.html)
Method Comment | procedure
Input Parameters | X
Code | {::nomarkdown}<pre><code> S X=$$DECRYP^XUSRB1(X),ESOK=0<br/> D HASH^XUSHSHP<br/> I X=$P($G(^VA(200,+DUZ,20)),U,4) S ESOK=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}