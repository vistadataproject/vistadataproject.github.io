---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQVI VITALS 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORQQVI VITALS{:/}
 tag | {::nomarkdown}FASTVIT{:/}
 routine | [ORQQVI](http://code.osehra.org/dox/Routine_ORQQVI_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Array of patient most recent vitals within start and stop date/times.  Ifno start and stop dates are indicated, the most recent are returned. If no start date is passed then the start date is 1 (i.e. before anydates). If no stop date is passed then the start date is also the stop date and ifthere is not start date then 9999999 is used as the stop date.{:/}

#### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient id (DFN) from Patient File (#2).{:/} | 
| {::nomarkdown}START DATE/TIME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Start date/time for vital retrieval in Fileman format.If none is passed then the start date is 1 (i.e. before any dates).{:/} | 
| {::nomarkdown}STOP DATE/TIME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Stop date/time for vital retrieval in Fileman format.If none is passed then the Start date is also the stop date and if thereis not start date then 9999999 is used as the stop date{:/} | 


### MUMPS Method description

 Property | Value 
 --- | --- 
 Method | FASTVIT^[ORQQVI](http://code.osehra.org/dox/Routine_ORQQVI_source.html)
 Method comment | return patient's most recent vital measurements
 Input parameters | {::nomarkdown}DFN, F1, F2{:/}
 First comment | {::nomarkdown}<pre> in date range<br/>ORY: return variable, results are returned in the format:<br/>     vital measurement ien^vital type^rate^date/time taken<br/>DFN: patient identifier from Patient File [#2]<br/> F1: starting date/time range<br/> F2: ending date/time range<br/></pre>{:/}
 Code | {::nomarkdown}  N CNT,DT1,DT2<br> S CNT=0<br> I $G(F1)>0 D<br> . I $G(F2)="",F1["." S DT1=$P(F1,".",1)_"."_$E($P(F1,".",2),1,4)<br> . E  S DT1=F1<br> E  S DT1=1<br> S DT2=$S($G(F2)>0:F2,DT1>1:DT1,1:9999998)<br> D VITAL("TEMPERATURE","T",DFN,.ORY,.CNT,DT1,DT2)<br> D VITAL("PULSE","P",DFN,.ORY,.CNT,DT1,DT2)<br> D VITAL("RESPIRATION","R",DFN,.ORY,.CNT,DT1,DT2)<br> D VITAL("BLOOD PRESSURE","BP",DFN,.ORY,.CNT,DT1,DT2)<br> D VITAL("HEIGHT","HT",DFN,.ORY,.CNT,DT1,DT2)<br> D VITAL("WEIGHT","WT",DFN,.ORY,.CNT,DT1,DT2)<br> D VITAL("PAIN","PN",DFN,.ORY,.CNT,DT1,DT2) ;dee 2/11/99<br> D VITAL("PULSE OXIMETRY","PO2",DFN,.ORY,.CNT,DT1,DT2)<br> D VITAL("CENTRAL VENOUS PRESSURE","CVP",DFN,.ORY,.CNT,DT1,DT2)<br> D VITAL("CIRCUMFERENCE/GIRTH","CG",DFN,.ORY,.CNT,DT1,DT2)<br> D VITAL("BODY MASS INDEX","BMI",DFN,.ORY,.CNT,DT1,DT2){:/}


### CPRS

 Name | Property 
 --- | --- 
 Pascal Code | {::nomarkdown} <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/rCover.pas">rCover.pas</a><br/> <a href="https://github.com/OSEHRA/VistA/blob/master/Packages/Order%20Entry%20Results%20Reporting/CPRS/CPRS-Chart/Vitals/rVitals.pas">Vitals/rVitals.pas</a><br/>{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 22nd 2017, 3:23:02 am</p>{:/}