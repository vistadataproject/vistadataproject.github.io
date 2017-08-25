---
layout: default
title: VISTA RPC Documentation
---

#### [Developer Documentation](../index) &#187; [Native RPCs](TableOfContents) &#187; ORQQVI VITALS<br/>
# ORQQVI VITALS

Array of patient most recent vitals within start and stop date/times.  Ifno start and stop dates are indicated, the most recent are returned. If no start date is passed then the start date is 1 (i.e. before anydates). If no stop date is passed then the start date is also the stop date and ifthere is not start date then 9999999 is used as the stop date.

## Properties

Property | Value
--- | ---
Label | FASTVIT
MUMPS Implementation | [ORQQVI](http://code.osehra.org/dox/Routine_ORQQVI_source.html)
Return Type | ARRAY


## Input Parameters

Name | Type | Maximum Data Length | Required | Description
--- | --- | --- | --- | ---
PATIENT ID | LITERAL | 16 | true | Patient id (DFN) from Patient File (#2).
START DATE/TIME | LITERAL | 16 |  | Start date/time for vital retrieval in Fileman format.If none is passed then the start date is 1 (i.e. before any dates).
STOP DATE/TIME | LITERAL | 16 |  | Stop date/time for vital retrieval in Fileman format.If none is passed then the Start date is also the stop date and if thereis not start date then 9999999 is used as the stop date



## MUMPS Method Description

Property | Value
--- | ---
Method | [FASTVIT^ORQQVI](http://code.osehra.org/dox/Routine_ORQQVI_source.html)
Method Comment | return patient&#x27;s most recent vital measurements
Input Parameters | DFN, F1, F2
First Comment | {::nomarkdown}<pre><code> in date range<br/>ORY: return variable, results are returned in the format:<br/>     vital measurement ien^vital type^rate^date/time taken<br/>DFN: patient identifier from Patient File [#2]<br/> F1: starting date/time range<br/> F2: ending date/time range<br/></code></pre>{:/}
Code | {::nomarkdown}<pre><code> N CNT,DT1,DT2<br/> S CNT=0<br/> I $G(F1)>0 D<br/> . I $G(F2)="",F1["." S DT1=$P(F1,".",1)_"."_$E($P(F1,".",2),1,4)<br/> . E  S DT1=F1<br/> E  S DT1=1<br/> S DT2=$S($G(F2)>0:F2,DT1>1:DT1,1:9999998)<br/> D VITAL("TEMPERATURE","T",DFN,.ORY,.CNT,DT1,DT2)<br/> D VITAL("PULSE","P",DFN,.ORY,.CNT,DT1,DT2)<br/> D VITAL("RESPIRATION","R",DFN,.ORY,.CNT,DT1,DT2)<br/> D VITAL("BLOOD PRESSURE","BP",DFN,.ORY,.CNT,DT1,DT2)<br/> D VITAL("HEIGHT","HT",DFN,.ORY,.CNT,DT1,DT2)<br/> D VITAL("WEIGHT","WT",DFN,.ORY,.CNT,DT1,DT2)<br/> D VITAL("PAIN","PN",DFN,.ORY,.CNT,DT1,DT2) ;dee 2/11/99<br/> D VITAL("PULSE OXIMETRY","PO2",DFN,.ORY,.CNT,DT1,DT2)<br/> D VITAL("CENTRAL VENOUS PRESSURE","CVP",DFN,.ORY,.CNT,DT1,DT2)<br/> D VITAL("CIRCUMFERENCE/GIRTH","CG",DFN,.ORY,.CNT,DT1,DT2)<br/> D VITAL("BODY MASS INDEX","BMI",DFN,.ORY,.CNT,DT1,DT2)</code></pre>{:/}



## CPRS

File Type | Description
--- | ---
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCover.pas">rCover.pas</a>{:/}
Pascal File | {::nomarkdown}<a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Vitals/rVitals.pas">Vitals/rVitals.pas</a>{:/}

{::nomarkdown} <br/><p style="font-size: 11px">Document generated on August 24th 2017, 2:57:41 pm</p>{:/}