---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPS COVER<br/>
# ORWPS COVER

Returns a list of medications to display on the CPRS GUI cover sheet for apatient.

## Properties

Property | Value
--- | ---
Label | COVER
MUMPS Implementation | [ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html)
Return Type | ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [COVER^ORWPS](http://code.osehra.org/dox/Routine_ORWPS_source.html)
Method Comment | retrieve meds for cover sheet
Input Parameters | DFN, FILTER
Code | {::nomarkdown}<pre><code> S FILTER=$G(FILTER,0)<br/> K ^TMP("PS",$J)<br/> D OCL^PSOORRL(DFN,"","")<br/> N ILST,ITMP,X,VAIN,VAERR S ILST=0<br/> D:FILTER INP^VADPT<br/> S ITMP="" F  S ITMP=$O(^TMP("PS",$J,ITMP)) Q:'ITMP  D<br/> . I FILTER,$G(VAIN(1))>0,$P(^TMP("PS",$J,ITMP,0),U)["N;O" Q<br/> . S X=^TMP("PS",$J,ITMP,0)<br/> . I '$L($P(X,U,2)) S X="??"  ; show something if drug empty<br/> . I $D(^TMP("PS",$J,ITMP,"CLINIC",0)) S LST($$NXT)=$P(X,U,1,2)_U_$P(X,U,8,9)_U_"C"<br/> . E  S LST($$NXT)=$P(X,U,1,2)_U_$P(X,U,8,9)<br/> K ^TMP("PS",$J)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCover.pas">rCover.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}