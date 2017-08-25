---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORWPCE ACTPROB<br/>
# ORWPCE ACTPROB

Build list of active problems for patient.

## Properties

Property | Value
--- | ---
Label | ACTPROB
MUMPS Implementation | [ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Return Type | GLOBAL ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
DFN | LITERAL | 12 | true | 



## MUMPS Method Description

Property | Value
--- | ---
Method | [ACTPROB^ORWPCE](http://code.osehra.org/dox/Routine_ORWPCE_source.html)
Method Comment | get list of patient&#x27;s active problems
Input Parameters | DFN, ORDATE
Code | {::nomarkdown}<pre><code> N ORPROB,ORPROBIX,ORPRCNT,ORTXT,ORTXT1,ORCODSYS,ORCOD,ORDT,ORTRY,QTLTXT,SCD,ORDATA,GMPINDT,DIAGINC,ORIMPDT<br/> K ^TMP("IB",$J,"INTERFACES","GMP SELECT PATIENT ACTIVE PROBLEMS")<br/> S:'+$G(ORDATE) ORDATE=DT<br/> S GMPINDT=ORDATE,ORIMPDT=$$IMPDATE^LEXU("10D")<br/> D DSELECT^GMPLENFM  ;DBIA 1365<br/> S ORPRCNT=0<br/> S ORPROBIX=0<br/> F  S ORPROBIX=$O(^TMP("IB",$J,"INTERFACES","GMP SELECT PATIENT ACTIVE PROBLEMS",ORPROBIX)) Q:'ORPROBIX  D  ;DBIA 1365<br/> . I (ORDATE<ORIMPDT)&($P(^TMP("IB",$J,"INTERFACES","GMP SELECT PATIENT ACTIVE PROBLEMS",ORPROBIX),"^",14)="10D") K ^TMP("IB",$J,"INTERFACES","GMP SELECT PATIENT ACTIVE PROBLEMS",ORPROBIX) Q<br/> . S ORPROB=$P(^TMP("IB",$J,"INTERFACES","GMP SELECT PATIENT ACTIVE PROBLEMS",ORPROBIX),"^",2,3)<br/> . I $L(ORPROB)>255 S $P(ORPROB,U)=$E($P(ORPROB,U),1,245)<br/> . I $E(ORPROB,1)="$" S ORPROB=$E(ORPROB,2,255)<br/> . I '$D(ORPROB(ORPROB)) D<br/> .. S ORPROB(ORPROB)=""<br/> .. S ORPRCNT=ORPRCNT+1<br/> .. S $P(^TMP("IB",$J,"INTERFACES","GMP SELECT PATIENT ACTIVE PROBLEMS",ORPROBIX),"^",2,3)=ORPROB<br/> . E  K ^TMP("IB",$J,"INTERFACES","GMP SELECT PATIENT ACTIVE PROBLEMS",ORPROBIX)<br/> S ^TMP("IB",$J,"INTERFACES","GMP SELECT PATIENT ACTIVE PROBLEMS",0)=ORPRCNT<br/> S GLST=$NA(^TMP("IB",$J,"INTERFACES","GMP SELECT PATIENT ACTIVE PROBLEMS"))</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/BA/fBALocalDiagnoses.pas">BA/fBALocalDiagnoses.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/BA/fBAOptionsDiagnoses.pas">BA/fBAOptionsDiagnoses.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Encounter/rPCE.pas">Encounter/rPCE.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}