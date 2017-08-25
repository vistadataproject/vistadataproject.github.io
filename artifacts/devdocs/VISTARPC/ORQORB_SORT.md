---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQORB SORT<br/>
# ORQORB SORT

Returns the notification sort method for user/division/system/pkg.

## Properties

Property | Value
--- | ---
Label | SORT
MUMPS Implementation | [ORQORB](http://code.osehra.org/dox/Routine_ORQORB_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [SORT^ORQORB](http://code.osehra.org/dox/Routine_ORQORB_source.html)
Method Comment | return notification sort method for user/division/system/pkg
Code | {::nomarkdown}<pre><code> S ORY=$$GET^XPAR("USR^DIV^SYS^PKG","ORB SORT METHOD",1,"I")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}