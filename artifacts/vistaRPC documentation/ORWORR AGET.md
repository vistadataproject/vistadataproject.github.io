---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWORR AGET 

 property | value 
--- | --- 
 label | {::nomarkdown}ORWORR AGET{:/}
 tag | {::nomarkdown}AGET{:/}
 routine | [ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Get an abbreviated order list for a patient in the format:     ^TMP(\ORR\,$J,ORLIST,n)=IFN^DGrp^ActTm{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | Get abbrev. event delayed order list for patient
 Input Parameters | {::nomarkdown}DFN<br/>FILTER<br/>GROUPS<br/>DTFROM<br/>DTTHRU<br/>EVENT<br/>ORRECIP{:/}
 Lines | ```
 N ORLIST,ORIFN,IFN,I,ORWTS,TOT,MULT,ORWARD,TXTVW,ORYD,PTEVTID,EVTNAME
 S (PTEVTID,EVTNAME)=""
 K ^TMP("ORR",$J),^TMP("ORRJD",$J)
 S:'$D(GROUPS) GROUPS=1 S:'$D(FILTER) FILTER=2
 S ORWTS=+$P(FILTER,U,2),FILTER=+FILTER
 S MULT=$S("^1^6^8^9^10^11^13^14^20^22^"[(U_FILTER_U):1,1:0)
 I $L($G(^DPT(DFN,.1))) S ORWARD=1 ; normally ptr to 42
 S:'$L($G(DTFROM)) DTFROM=0
 S:'$L($G(DTTHRU)) DTTHRU=0
 I $P(DTFROM,".")=$P(DTTHRU,"."),$P(DTFROM,".",2)>$P(DTTHRU,".",2),$P(DTTHRU,".",2)="" S $P(DTTHRU,".",2)=2359
 S:'$L($G(EVENT)) EVENT=0
 I $G(EVTDCREL)="TRUE" D
 . D EN^ORQ1(DFN_";DPT(",GROUPS,FILTER,"",DTFROM,DTTHRU,2,MULT,"",1,EVENT)
 . D GET2^ORWORR1
 E  D
 . D EN^ORQ1(DFN_";DPT(",GROUPS,FILTER,"",DTFROM,DTTHRU,0,MULT,"",1,EVENT)
 . D GET1^ORWORR1```
 Leading comment lines | {::nomarkdown}returns ^TMP("ORR",$J,ORLIST,n)=IFN^DGrp^ActTm<br/>see input parameters above<br/>-- from ORWORR<br/>-- section uses ORQ1 to get orders list rather than XGET --{:/}




 Generated on January 13th 2017, 6:55:29 am