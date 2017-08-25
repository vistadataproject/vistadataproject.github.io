---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWTIU IDNOTES INSTALLED<br/>
# ORWTIU IDNOTES INSTALLED

Returns "1" if TIU*1.0*100 is installed, "0" otherwise.  This lets theCPRS GUI enable or disable the Interdisciplinary Notes functionality untilthe server is ready.

## Properties

Property | Value
--- | ---
Label | IDNOTES
MUMPS Implementation | [ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [IDNOTES^ORWTIU](http://code.osehra.org/dox/Routine_ORWTIU_source.html)
Method Comment | Is ID Notes installed?
Code | {::nomarkdown}<pre><code> S ORY=$$PATCH^XPDUTL("TIU*1.0*100")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}