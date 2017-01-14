---
layout: default
title: VISTA RPC documentation
---



# [RPCs](TableOfContent.md) &#8594; ORWPCE ACTPROB 


 ## VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWPCE ACTPROB{:/}
 tag | {::nomarkdown}ACTPROB{:/}
 routine | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Build list of active problems for patient.{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}DFN{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}12{:/} | {::nomarkdown}true{:/} |  | 


## MUMPS Method description

 property | value 
 --- | --- 
 Method | ACTPROB^[ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
 Method comment | get list of patient's active problems
 Input parameters | {::nomarkdown}DFN<br/>ORDATE{:/}
 Code | ```  N ORPROB,ORPROBIX,ORPRCNT,ORTXT,ORTXT1,ORCODSYS,ORCOD,ORDT,ORTRY,QTLTXT,SCD,ORDATA,GMPINDT,DIAGINC,ORIMPDT<br/> K ^TMP("IB",$J,"INTERFACES","GMP SELECT PATIENT ACTIVE PROBLEMS")<br/> S:'+$G(ORDATE) ORDATE=DT<br/> S GMPINDT=ORDATE,ORIMPDT=$$IMPDATE^LEXU("10D")<br/> D DSELECT^GMPLENFM  ;DBIA 1365<br/> S ORPRCNT=0<br/> S ORPROBIX=0<br/> F  S ORPROBIX=$O(^TMP("IB",$J,"INTERFACES","GMP SELECT PATIENT ACTIVE PROBLEMS",ORPROBIX)) Q:'ORPROBIX  D  ;DBIA 1365<br/> . I (ORDATE<ORIMPDT)&($P(^TMP("IB",$J,"INTERFACES","GMP SELECT PATIENT ACTIVE PROBLEMS",ORPROBIX),"^",14)="10D") K ^TMP("IB",$J,"INTERFACES","GMP SELECT PATIENT ACTIVE PROBLEMS",ORPROBIX) Q<br/> . S ORPROB=$P(^TMP("IB",$J,"INTERFACES","GMP SELECT PATIENT ACTIVE PROBLEMS",ORPROBIX),"^",2,3)<br/> . I $L(ORPROB)>255 S $P(ORPROB,U)=$E($P(ORPROB,U),1,245)<br/> . I $E(ORPROB,1)="$" S ORPROB=$E(ORPROB,2,255)<br/> . I '$D(ORPROB(ORPROB)) D<br/> .. S ORPROB(ORPROB)=""<br/> .. S ORPRCNT=ORPRCNT+1<br/> .. S $P(^TMP("IB",$J,"INTERFACES","GMP SELECT PATIENT ACTIVE PROBLEMS",ORPROBIX),"^",2,3)=ORPROB<br/> . E  K ^TMP("IB",$J,"INTERFACES","GMP SELECT PATIENT ACTIVE PROBLEMS",ORPROBIX)<br/> S ^TMP("IB",$J,"INTERFACES","GMP SELECT PATIENT ACTIVE PROBLEMS",0)=ORPRCNT<br/> S GLST=$NA(^TMP("IB",$J,"INTERFACES","GMP SELECT PATIENT ACTIVE PROBLEMS"))```{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 14th 2017, 7:36:24 am</p>{:/}