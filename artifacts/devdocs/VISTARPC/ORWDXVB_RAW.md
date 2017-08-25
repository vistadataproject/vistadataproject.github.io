---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXVB RAW<br/>
# ORWDXVB RAW

Return raw Lab Test Results associated with Blood Bank orderrequest.

## Properties

Property | Value
--- | ---
Label | RAW
MUMPS Implementation | [ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
Return Type | GLOBAL ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [RAW^ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
Method Comment | Get RAW test results
Input Parameters | DFN, ORX
Code | {::nomarkdown}<pre><code> Q:'$O(ORX(0))  ;ORX contains a list of tests to retrieve results for<br/> N ORCOM,ORT,ORTST,ORTDT,ORTMP,GCNT,CCNT,GIOSL,GIOM,I<br/> S GCNT=0,CCNT=1,GIOSL=999999,GIOM=80<br/> S OROOT=$NA(^TMP("ORVBEC",$J))<br/> K ^TMP("ORVBEC",$J)<br/> S ORT=0 F  S ORT=$O(ORX(ORT)) Q:'ORT  S ORTST=$P(ORX(ORT),"^",1) D<br/> . K ^TMP("LRRR",$J) D RR^LR7OR1(DFN,,,,,ORTST,,1)<br/> . S ORTMP="^TMP(""LRRR"",$J,DFN)",ORTMP=$Q(@ORTMP)<br/> . Q:$P(ORTMP,",",1,3)'=("^TMP(""LRRR"","_$J_","_DFN)<br/> . S ORTDT=9999999-+$P(ORTMP,",",5),ORZ=@ORTMP<br/> . D LN<br/> . S ^TMP("ORVBEC",$J,GCNT,0)=$P(ORZ,"^",1,6)_"^"_ORTDT<br/> K ^TMP("LRRR",$J)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}