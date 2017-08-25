---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDCSLT DEF<br/>
# ORWDCSLT DEF

Load dialog data (lists & defaults) for a consult order. (16-BIT)

## Properties

Property | Value
--- | ---
Label | DEF
MUMPS Implementation | [ORWDCSLT](http://code.osehra.org/dox/Routine_ORWDCSLT_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [DEF^ORWDCSLT](http://code.osehra.org/dox/Routine_ORWDCSLT_source.html)
Method Comment | load consult info    
Code | {::nomarkdown}<pre><code> N ILST,NAM,IEN,X<br/> S ILST=0<br/> S LST($$NXT)="~Services" D SRVC<br/> S LST($$NXT)="~Inpt Urgencies" D INURG<br/> S LST($$NXT)="~Outpt Urgencies" D OUTURG<br/> S LST($$NXT)="~Inpt Place" D INPLACE<br/> S LST($$NXT)="~Outpt Place" D OUTPLACE</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}