---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORDEA PINLKCHK<br/>
# ORDEA PINLKCHK



## Properties

Property | Value
--- | ---
Label | PINLKCHK
MUMPS Implementation | [ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [PINLKCHK^ORDEA](http://code.osehra.org/dox/Routine_ORDEA_source.html)
Method Comment | check if the current user has an active PIN lock
First Comment | {::nomarkdown}<pre><code>ORY=1 if there is an active lock and ORY=0 if no active lock</code></pre>{:/}
Code | {::nomarkdown}<pre><code> S ORY=0<br/> Q:'$D(^XTMP("OR DEA PIN LOCK",DUZ))<br/> N ORDIFF<br/> S ORDIFF=$$FMDIFF^XLFDT($$NOW^XLFDT,$G(^XTMP("OR DEA PIN LOCK",DUZ)),2)<br/> I ORDIFF<900 S ORY=1</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/fReview.pas">fReview.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/fOrdersSign.pas">Orders/fOrdersSign.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}