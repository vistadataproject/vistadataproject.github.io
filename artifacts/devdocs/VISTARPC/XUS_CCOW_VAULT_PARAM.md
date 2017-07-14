---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; XUS CCOW VAULT PARAM<br/>
# XUS CCOW VAULT PARAM

This RPC returns a value for use with the CCOW vault.

## Properties

Property | Value
--- | ---
Label | CCOWPC
Routine | [XUSRB4](http://code.osehra.org/dox/Routine_XUSRB4_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [CCOWPC^XUSRB4](http://code.osehra.org/dox/Routine_XUSRB4_source.html)
Method Comment | Return ap
Code | {::nomarkdown}<pre><code> N I,XU4<br/> S RET(0)="" I '$$BROKER^XWBLIB Q<br/> D GETLST^XPAR(.XU4,"SYS","XUS CCOW VAULT PARAM","Q")<br/> F I=0,1 S RET(I)=$P($G(XU4(I+1)),"^",2,99)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Executable Only | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}