---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWDXVB RAW 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWDXVB RAW{:/}
 tag | {::nomarkdown}RAW{:/}
 routine | [ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Return raw Lab Test Results associated with Blood Bank orderrequest.{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | RAW^[ORWDXVB](http://code.osehra.org/dox/Routine_ORWDXVB_source.html)
 Method comment | Get RAW test results
 Input parameters | {::nomarkdown}DFN<br>ORX{:/}
 Code | {::nomarkdown}  Q:'$O(ORX(0))  ;ORX contains a list of tests to retrieve results for<br> N ORCOM,ORT,ORTST,ORTDT,ORTMP,GCNT,CCNT,GIOSL,GIOM,I<br> S GCNT=0,CCNT=1,GIOSL=999999,GIOM=80<br> S OROOT=$NA(^TMP("ORVBEC",$J))<br> K ^TMP("ORVBEC",$J)<br> S ORT=0 F  S ORT=$O(ORX(ORT)) Q:'ORT  S ORTST=$P(ORX(ORT),"^",1) D<br> . K ^TMP("LRRR",$J) D RR^LR7OR1(DFN,,,,,ORTST,,1)<br> . S ORTMP="^TMP(""LRRR"",$J,DFN)",ORTMP=$Q(@ORTMP)<br> . Q:$P(ORTMP,",",1,3)'=("^TMP(""LRRR"","_$J_","_DFN)<br> . S ORTDT=9999999-+$P(ORTMP,",",5),ORZ=@ORTMP<br> . D LN<br> . S ^TMP("ORVBEC",$J,GCNT,0)=$P(ORZ,"^",1,6)_"^"_ORTDT<br> K ^TMP("LRRR",$J){:/}


### CPRS

[Orders/rODLab.pas](https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Orders/rODLab.pas")

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 19th 2017, 9:21:34 am</p>{:/}