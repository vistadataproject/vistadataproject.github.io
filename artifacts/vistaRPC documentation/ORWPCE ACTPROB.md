---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWPCE ACTPROB 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE ACTPROB{:/}
 tag | {::nomarkdown}ACTPROB{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Build list of active problems for patient.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | get list of patient's active problems
 Input Parameters | {::nomarkdown}DFN<br/>ORDATE{:/}
 Lines | ```
 N ORPROB,ORPROBIX,ORPRCNT,ORTXT,ORTXT1,ORCODSYS,ORCOD,ORDT,ORTRY,QTLTXT,SCD,ORDATA,GMPINDT,DIAGINC,ORIMPDT
 K ^TMP("IB",$J,"INTERFACES","GMP SELECT PATIENT ACTIVE PROBLEMS")
 S:'+$G(ORDATE) ORDATE=DT
 S GMPINDT=ORDATE,ORIMPDT=$$IMPDATE^LEXU("10D")
 D DSELECT^GMPLENFM  ;DBIA 1365
 S ORPRCNT=0
 S ORPROBIX=0
 F  S ORPROBIX=$O(^TMP("IB",$J,"INTERFACES","GMP SELECT PATIENT ACTIVE PROBLEMS",ORPROBIX)) Q:'ORPROBIX  D  ;DBIA 1365
 . I (ORDATE<ORIMPDT)&($P(^TMP("IB",$J,"INTERFACES","GMP SELECT PATIENT ACTIVE PROBLEMS",ORPROBIX),"^",14)="10D") K ^TMP("IB",$J,"INTERFACES","GMP SELECT PATIENT ACTIVE PROBLEMS",ORPROBIX) Q
 . S ORPROB=$P(^TMP("IB",$J,"INTERFACES","GMP SELECT PATIENT ACTIVE PROBLEMS",ORPROBIX),"^",2,3)
 . I $L(ORPROB)>255 S $P(ORPROB,U)=$E($P(ORPROB,U),1,245)
 . I $E(ORPROB,1)="$" S ORPROB=$E(ORPROB,2,255)
 . I '$D(ORPROB(ORPROB)) D
 .. S ORPROB(ORPROB)=""
 .. S ORPRCNT=ORPRCNT+1
 .. S $P(^TMP("IB",$J,"INTERFACES","GMP SELECT PATIENT ACTIVE PROBLEMS",ORPROBIX),"^",2,3)=ORPROB
 . E  K ^TMP("IB",$J,"INTERFACES","GMP SELECT PATIENT ACTIVE PROBLEMS",ORPROBIX)
 S ^TMP("IB",$J,"INTERFACES","GMP SELECT PATIENT ACTIVE PROBLEMS",0)=ORPRCNT
 S GLST=$NA(^TMP("IB",$J,"INTERFACES","GMP SELECT PATIENT ACTIVE PROBLEMS"))```

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}12{:/} | {::nomarkdown}true{:/} |  | 




 Generated on January 13th 2017, 6:55:29 am