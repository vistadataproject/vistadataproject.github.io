---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXVB RESULTS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXVB RESULTS{:/}
 tag | {::nomarkdown}RESULTS{:/}
 routine | [ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Return patient's Lab Test Results associated with Blood Bank orderrequest.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get test results
 Input Parameters | {::nomarkdown}DFN<br/>ORX{:/}
 Lines | ```
 Q:'$O(ORX(0))  ;ORX contains a list of tests to retrieve results for
 N ORCOM,ORT,ORTST,ORTDT,ORTMP,GCNT,CCNT,GIOSL,GIOM,I,ORZ
 S GCNT=0,CCNT=1,GIOSL=999999,GIOM=80
 S OROOT=$NA(^TMP("ORVBEC",$J))
 K ^TMP("ORVBEC",$J)
 D LN
 S ^TMP("ORVBEC",$J,GCNT,0)=$$S^ORU4(1,CCNT,"RECENT LAB RESULTS:",.CCNT)
 D LN
 S ^TMP("ORVBEC",$J,GCNT,0)=$$S^ORU4(1,CCNT,"Test    Result    Units      Range     Collected       Accession     Sts",.CCNT)
 D LN
 S ^TMP("ORVBEC",$J,GCNT,0)=$$S^ORU4(1,CCNT,"----    ------    -----      -----     ---------       ---------     ---",.CCNT)
 S ORT=0 F  S ORT=$O(ORX(ORT)) Q:'ORT  S ORTST=$P(ORX(ORT),"^",1) D
 . K ^TMP("LRRR",$J) D RR^LR7OR1(DFN,,,,,ORTST,,1)  ;DBIA 2503
 . S ORTMP=$$FIRST^ORCDVBEC(DFN,ORTST) Q:'$L(ORTMP)
 . S ORTDT=9999999-+$P(ORTMP,",",5),ORZ=@ORTMP
 . D LN
 . S ^TMP("ORVBEC",$J,GCNT,0)=$$S^ORU4(1,CCNT,$P(ORZ,"^",15),.CCNT)_$$S^ORU4(8,CCNT,$J($P(ORZ,"^",2),7),.CCNT)_$$S^ORU4(16,CCNT,$P(ORZ,"^",3),.CCNT)_$$S^ORU4(19,CCNT,$P(ORZ,"^",4),.CCNT)_$$S^ORU4(30,CCNT,$P(ORZ,"^",5),.CCNT)
 . S ^(0)=^TMP("ORVBEC",$J,GCNT,0)_$$S^ORU4(40,CCNT,$$DATETIME^ORCHTAB(ORTDT),.CCNT)_$$S^ORU4(56,CCNT,$P(ORZ,"^",16),.CCNT)_$$S^ORU4(71,CCNT,$P(ORZ,"^",6),.CCNT)
 . S ORCOM=$P(ORTMP,",",1,5)_",""N""" ;check for comments
 . F  S ORTMP=$Q(@ORTMP) Q:$P(ORTMP,",",1,6)'=ORCOM  D
 .. D LN
 .. S ^TMP("ORVBEC",$J,GCNT,0)=$$S^ORU4(1,CCNT,@ORTMP,.CCNT)
 I GCNT<4 K ^TMP("ORVBEC",$J)
 K ^TMP("LRRR",$J)```




 Generated on January 13th 2017, 6:55:29 am