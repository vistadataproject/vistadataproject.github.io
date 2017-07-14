---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORB SORT METHOD<br/>
# ORB SORT METHOD

Returns the default sort method for notification display based on the precedence USER, DIVISION, SYSTEM, PACKAGE.

## Properties

Property | Value
--- | ---
Label | SORT
Routine | [ORQORB](http://code.osehra.org/dox/Routine_ORQORB_source.html)
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

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}