---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWD1 SVONLY<br/>
# ORWD1 SVONLY

Prints service copies only (used when user says "Don't Print" for theother copies).

## Properties

Property | Value
--- | ---
Label | SVONLY
MUMPS Implementation | [ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
Return Type | SINGLE VALUE




## MUMPS Method Description

Property | Value
--- | ---
Method | [SVONLY^ORWD1](http://code.osehra.org/dox/Routine_ORWD1_source.html)
Method Comment | print service copies only
Input Parameters | HLOC, PRTLST
Code | {::nomarkdown}<pre><code> Q:$G(A7RNDBI)  ; per NDBI, to suppress prints during integration<br/> N TMPLST,I,J<br/> S HLOC=+HLOC_";SC(",OK=1<br/> S I="",J=0 F  S I=$O(PRTLST(I)) Q:I'>0  D<br/> . I ($L(PRTLST(I),U)>1),'$P(PRTLST(I),U,5) Q<br/> . S J=J+1,TMPLST(J)=$P(PRTLST(I),U)<br/> I $D(TMPLST)>1 D GUI^ORPR02(.TMPLST,"","S",HLOC)<br/></code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rOrders.pas">Orders/rOrders.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}