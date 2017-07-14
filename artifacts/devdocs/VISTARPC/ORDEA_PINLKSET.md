---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORDEA PINLKSET<br/>
# ORDEA PINLKSET



## Properties

Property | Value
--- | ---
Label | PINLKSET
Routine | [ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [PINLKSET^ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
Method Comment | set a PIN lock on the current user
Code | {::nomarkdown}<pre><code> S ^XTMP("OR DEA PIN LOCK",0)=$$FMADD^XLFDT($$NOW^XLFDT,2)_U_$$NOW^XLFDT<br/> S ^XTMP("OR DEA PIN LOCK",DUZ)=$$NOW^XLFDT<br/> S ORY=^XTMP("OR DEA PIN LOCK",DUZ)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fReview.pas">fReview.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/fOrdersSign.pas">Orders/fOrdersSign.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}