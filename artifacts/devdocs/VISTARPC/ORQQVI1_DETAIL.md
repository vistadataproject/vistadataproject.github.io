---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQVI1 DETAIL<br/>
# ORQQVI1 DETAIL



## Properties

Property | Value
--- | ---
Label | DETAIL
Routine | [ORQQVI1](http://code.osehra.org/dox/Routine_ORQQVI1_source.html)
Return Type | GLOBAL ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [DETAIL^ORQQVI1](http://code.osehra.org/dox/Routine_ORQQVI1_source.html)
Method Comment | from Remote Procedure file
Input Parameters | DFN, DATE1, DATE2, RTIMES, TESTS
Code | {::nomarkdown}<pre><code> N CNT,NUM,TEMPDATE<br/> I DATE1<DATE2 S TEMPDATE=DATE1,DATE1=DATE2,DATE2=TEMPDATE<br/> K ^TMP("ORQQVX",$J,"INPUT"),^("OUTPUT")<br/> S ROOT=$NA(^TMP("ORQQVX",$J,"OUTPUT"))<br/> S ^TMP("ORQQVX",$J,"INPUT",1)=DFN_U_DATE1_U_DATE2_U_RTIMES<br/> S CNT=1,NUM=0 F  S NUM=$O(TESTS(NUM)) Q:NUM<1  D<br/> .S CNT=CNT+1<br/> .S ^TMP("ORQQVX",$J,"INPUT",CNT)=TESTS(NUM)<br/> D MEMODATA</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
NOT OSEHRA CPRS | {::nomarkdown}{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on July 13th 2017, 2:13:30 pm</p>{:/}