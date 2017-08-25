---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWDXVB RESULTS<br/>
# ORWDXVB RESULTS

Return patient's Lab Test Results associated with Blood Bank orderrequest.

## Properties

Property | Value
--- | ---
Label | RESULTS
MUMPS Implementation | [ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
Return Type | GLOBAL ARRAY




## MUMPS Method Description

Property | Value
--- | ---
Method | [RESULTS^ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
Method Comment | Get test results
Input Parameters | DFN, ORX
Code | {::nomarkdown}<pre><code> Q:'$O(ORX(0))  ;ORX contains a list of tests to retrieve results for<br/> N ORCOM,ORT,ORTST,ORTDT,ORTMP,GCNT,CCNT,GIOSL,GIOM,I,ORZ<br/> S GCNT=0,CCNT=1,GIOSL=999999,GIOM=80<br/> S OROOT=$NA(^TMP("ORVBEC",$J))<br/> K ^TMP("ORVBEC",$J)<br/> D LN<br/> S ^TMP("ORVBEC",$J,GCNT,0)=$$S^ORU4(1,CCNT,"RECENT LAB RESULTS:",.CCNT)<br/> D LN<br/> S ^TMP("ORVBEC",$J,GCNT,0)=$$S^ORU4(1,CCNT,"Test    Result    Units      Range     Collected       Accession     Sts",.CCNT)<br/> D LN<br/> S ^TMP("ORVBEC",$J,GCNT,0)=$$S^ORU4(1,CCNT,"----    ------    -----      -----     ---------       ---------     ---",.CCNT)<br/> S ORT=0 F  S ORT=$O(ORX(ORT)) Q:'ORT  S ORTST=$P(ORX(ORT),"^",1) D<br/> . K ^TMP("LRRR",$J) D RR^LR7OR1(DFN,,,,,ORTST,,1)  ;DBIA 2503<br/> . S ORTMP=$$FIRST^ORCDVBEC(DFN,ORTST) Q:'$L(ORTMP)<br/> . S ORTDT=9999999-+$P(ORTMP,",",5),ORZ=@ORTMP<br/> . D LN<br/> . S ^TMP("ORVBEC",$J,GCNT,0)=$$S^ORU4(1,CCNT,$P(ORZ,"^",15),.CCNT)_$$S^ORU4(8,CCNT,$J($P(ORZ,"^",2),7),.CCNT)_$$S^ORU4(16,CCNT,$P(ORZ,"^",3),.CCNT)_$$S^ORU4(19,CCNT,$P(ORZ,"^",4),.CCNT)_$$S^ORU4(30,CCNT,$P(ORZ,"^",5),.CCNT)<br/> . S ^(0)=^TMP("ORVBEC",$J,GCNT,0)_$$S^ORU4(40,CCNT,$$DATETIME^ORCHTAB(ORTDT),.CCNT)_$$S^ORU4(56,CCNT,$P(ORZ,"^",16),.CCNT)_$$S^ORU4(71,CCNT,$P(ORZ,"^",6),.CCNT)<br/> . S ORCOM=$P(ORTMP,",",1,5)_",""N""" ;check for comments<br/> . F  S ORTMP=$Q(@ORTMP) Q:$P(ORTMP,",",1,6)'=ORCOM  D<br/> .. D LN<br/> .. S ^TMP("ORVBEC",$J,GCNT,0)=$$S^ORU4(1,CCNT,@ORTMP,.CCNT)<br/> I GCNT<4 K ^TMP("ORVBEC",$J)<br/> K ^TMP("LRRR",$J)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}