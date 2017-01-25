---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXVB RESULTS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXVB RESULTS{:/}
 tag | {::nomarkdown}RESULTS{:/}
 routine | [ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Return patient's Lab Test Results associated with Blood Bank orderrequest.{:/}


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | RESULTS^[ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
 Method comment | Get test results
 Input parameters | {::nomarkdown}DFN, ORX{:/}
 Code | {::nomarkdown}  Q:'$O(ORX(0))  ;ORX contains a list of tests to retrieve results for<br> N ORCOM,ORT,ORTST,ORTDT,ORTMP,GCNT,CCNT,GIOSL,GIOM,I,ORZ<br> S GCNT=0,CCNT=1,GIOSL=999999,GIOM=80<br> S OROOT=$NA(^TMP("ORVBEC",$J))<br> K ^TMP("ORVBEC",$J)<br> D LN<br> S ^TMP("ORVBEC",$J,GCNT,0)=$$S^ORU4(1,CCNT,"RECENT LAB RESULTS:",.CCNT)<br> D LN<br> S ^TMP("ORVBEC",$J,GCNT,0)=$$S^ORU4(1,CCNT,"Test    Result    Units      Range     Collected       Accession     Sts",.CCNT)<br> D LN<br> S ^TMP("ORVBEC",$J,GCNT,0)=$$S^ORU4(1,CCNT,"----    ------    -----      -----     ---------       ---------     ---",.CCNT)<br> S ORT=0 F  S ORT=$O(ORX(ORT)) Q:'ORT  S ORTST=$P(ORX(ORT),"^",1) D<br> . K ^TMP("LRRR",$J) D RR^LR7OR1(DFN,,,,,ORTST,,1)  ;DBIA 2503<br> . S ORTMP=$$FIRST^ORCDVBEC(DFN,ORTST) Q:'$L(ORTMP)<br> . S ORTDT=9999999-+$P(ORTMP,",",5),ORZ=@ORTMP<br> . D LN<br> . S ^TMP("ORVBEC",$J,GCNT,0)=$$S^ORU4(1,CCNT,$P(ORZ,"^",15),.CCNT)_$$S^ORU4(8,CCNT,$J($P(ORZ,"^",2),7),.CCNT)_$$S^ORU4(16,CCNT,$P(ORZ,"^",3),.CCNT)_$$S^ORU4(19,CCNT,$P(ORZ,"^",4),.CCNT)_$$S^ORU4(30,CCNT,$P(ORZ,"^",5),.CCNT)<br> . S ^(0)=^TMP("ORVBEC",$J,GCNT,0)_$$S^ORU4(40,CCNT,$$DATETIME^ORCHTAB(ORTDT),.CCNT)_$$S^ORU4(56,CCNT,$P(ORZ,"^",16),.CCNT)_$$S^ORU4(71,CCNT,$P(ORZ,"^",6),.CCNT)<br> . S ORCOM=$P(ORTMP,",",1,5)_",""N""" ;check for comments<br> . F  S ORTMP=$Q(@ORTMP) Q:$P(ORTMP,",",1,6)'=ORCOM  D<br> .. D LN<br> .. S ^TMP("ORVBEC",$J,GCNT,0)=$$S^ORU4(1,CCNT,@ORTMP,.CCNT)<br> I GCNT<4 K ^TMP("ORVBEC",$J)<br> K ^TMP("LRRR",$J){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas">Orders/rODLab.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 25th 2017, 2:31:55 am</p>{:/}