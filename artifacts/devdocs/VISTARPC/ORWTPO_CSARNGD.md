---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWTPO CSARNGD<br/>
# ORWTPO CSARNGD



## Properties

Property | Value
--- | ---
Label | CSARNGD
MUMPS Implementation | [ORWTPO](http://code.osehra.org/dox/Routine_ORWTPO_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [CSARNGD^ORWTPO](http://code.osehra.org/dox/Routine_ORWTPO_source.html)
Method Comment | RPC
First Comment | {::nomarkdown}<pre><code> get start, stop defaults</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S INFO=$$GET^XPAR("DIV^SYS^PKG","ORQQCSDR CS RANGE START",1,"I")_U<br/> S INFO=INFO_$$GET^XPAR("DIV^SYS^PKG","ORQQCSDR CS RANGE STOP",1,"I")</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}