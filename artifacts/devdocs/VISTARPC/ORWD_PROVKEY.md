---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWD PROVKEY<br/>
# ORWD PROVKEY

Returns 1 if the users possesses the PROVIDER key.

## Properties

Property | Value
--- | ---
Label | PROVKEY
MUMPS Implementation | [ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [PROVKEY^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
Method Comment | Returns 1 if user possesses the provider key
Input Parameters | USERID
Code | {::nomarkdown}<pre><code> N NAM S NAM=$P(^VA(200,USERID,0),U,1)<br/> S VAL=$D(^VA(200,"AK.PROVIDER",NAM,USERID))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}