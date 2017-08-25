---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWGN AUTHUSR<br/>
# ORWGN AUTHUSR



## Properties

Property | Value
--- | ---
Label | AUTHUSR
MUMPS Implementation | [ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [AUTHUSR^ORWGN](http://code.osehra.org/dox/Routine_ORWGN_source.html)
Method Comment | Does user has permission to access GN?
Code | {::nomarkdown}<pre><code> S ORY=0<br/> I $D(^XUSEC("OR GN ACCESS",DUZ)) S ORY=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}