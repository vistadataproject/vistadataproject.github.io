---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWD KEY<br/>
# ORWD KEY

RPC which receives a key name and returns a 1 if the user holds the key,otherwise a 0 is returned.

## Properties

Property | Value
--- | ---
Label | KEY
Routine | [ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [KEY^ORWD](http://code.osehra.org/dox/Routine_ORWD_source.html)
Method Comment | Returns 1 if user possesses the key
Input Parameters | KEYNAME, USERID
Code | {::nomarkdown}<pre><code> S VAL=0 I $D(^XUSEC(KEYNAME,USERID)) S VAL=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}