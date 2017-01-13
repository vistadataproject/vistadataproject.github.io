---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQQVI VITALS 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQQVI VITALS{:/}
 tag | {::nomarkdown}FASTVIT{:/}
 routine | [ORQQVI](http://code.osehra.org/dox/Routine_ORQQVI_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Array of patient most recent vitals within start and stop date/times.  Ifno start and stop dates are indicated, the most recent are returned. If no start date is passed then the start date is 1 (i.e. before anydates). If no stop date is passed then the start date is also the stop date and ifthere is not start date then 9999999 is used as the stop date.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return patient's most recent vital measurements
 Input Parameters | {::nomarkdown}DFN<br/>F1<br/>F2{:/}
 Lines | ```
 N CNT,DT1,DT2
 S CNT=0
 I $G(F1)>0 D
 . I $G(F2)="",F1["." S DT1=$P(F1,".",1)_"."_$E($P(F1,".",2),1,4)
 . E  S DT1=F1
 E  S DT1=1
 S DT2=$S($G(F2)>0:F2,DT1>1:DT1,1:9999998)
 D VITAL("TEMPERATURE","T",DFN,.ORY,.CNT,DT1,DT2)
 D VITAL("PULSE","P",DFN,.ORY,.CNT,DT1,DT2)
 D VITAL("RESPIRATION","R",DFN,.ORY,.CNT,DT1,DT2)
 D VITAL("BLOOD PRESSURE","BP",DFN,.ORY,.CNT,DT1,DT2)
 D VITAL("HEIGHT","HT",DFN,.ORY,.CNT,DT1,DT2)
 D VITAL("WEIGHT","WT",DFN,.ORY,.CNT,DT1,DT2)
 D VITAL("PAIN","PN",DFN,.ORY,.CNT,DT1,DT2) ;dee 2/11/99
 D VITAL("PULSE OXIMETRY","PO2",DFN,.ORY,.CNT,DT1,DT2)
 D VITAL("CENTRAL VENOUS PRESSURE","CVP",DFN,.ORY,.CNT,DT1,DT2)
 D VITAL("CIRCUMFERENCE/GIRTH","CG",DFN,.ORY,.CNT,DT1,DT2)
 D VITAL("BODY MASS INDEX","BMI",DFN,.ORY,.CNT,DT1,DT2)```
 Leading comment lines | {::nomarkdown}in date range<br/>ORY: return variable, results are returned in the format:<br/>vital measurement ien^vital type^rate^date/time taken<br/>DFN: patient identifier from Patient File [#2]<br/>F1: starting date/time range<br/>F2: ending date/time range{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT ID{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient id (DFN) from Patient File (#2).{:/} | 
| {::nomarkdown}START DATE/TIME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Start date/time for vital retrieval in Fileman format.If none is passed then the start date is 1 (i.e. before any dates).{:/} | 
| {::nomarkdown}STOP DATE/TIME{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} |  | {::nomarkdown}Stop date/time for vital retrieval in Fileman format.If none is passed then the Start date is also the stop date and if thereis not start date then 9999999 is used as the stop date{:/} | 




 Generated on January 13th 2017, 6:55:28 am