---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; TIU FIELD LIST IMPORT<br/>
# TIU FIELD LIST IMPORT

Calls the import process for a pre-loaded (into ^TMP) list of templatefields.

## Properties

Property | Value
--- | ---
Label | LIMPORT
Routine | [TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [LIMPORT^TIUSRVF1](http://code.osehra.org/dox/Routine_TIUSRVF1_source.html)
Method Comment | Calls the import process to import all of the fields in the
First Comment | {::nomarkdown}<pre><code>^TMP global for this process.  Result contains a list of NAME^X^RENAME<br/>strings.</code></pre>{:/}
Code | {::nomarkdown}<pre><code> D IMPORT2^TIUSRVF(.RESULT,"^TMP(""TIUFLDXML"",$J)",1)<br/></code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Templates/rTemplates.pas">Templates/rTemplates.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}