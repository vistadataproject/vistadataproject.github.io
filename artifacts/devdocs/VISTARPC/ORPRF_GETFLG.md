---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORPRF GETFLG<br/>
# ORPRF GETFLG



## Properties

Property | Value
--- | ---
Label | GETFLG
MUMPS Implementation | [ORPRF](http://code.osehra.org/dox/Routine_ORPRF_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [GETFLG^ORPRF](http://code.osehra.org/dox/Routine_ORPRF_source.html)
Method Comment | Return detailed flag info for flag FLAGID
Input Parameters | PTDFN, FLAGID
Code | {::nomarkdown}<pre><code> I '$D(^TMP("ORPRF",$J,FLAGID)) Q<br/> N IX,CNT<br/> S (IX,CNT)=0<br/> F  S IX=$O(^TMP("ORPRF",$J,FLAGID,IX)) Q:'IX  D<br/> . S CNT=CNT+1,ORY(CNT)=$G(^TMP("ORPRF",$J,FLAGID,IX))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/uOrPtf.pas">uOrPtf.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}