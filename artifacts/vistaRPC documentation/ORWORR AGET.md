---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORWORR AGET 



### VISTA File 8994 


 property | value 
--- | --- 
 label | {::nomarkdown}ORWORR AGET{:/}
 tag | {::nomarkdown}AGET{:/}
 routine | [ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html)
 return value type | {::nomarkdown}GLOBAL ARRAY{:/}
 description | {::nomarkdown}Get an abbreviated order list for a patient in the format:     ^TMP(\ORR\,$J,ORLIST,n)=IFN^DGrp^ActTm{:/}


### MUMPS Method description

 property | value 
 --- | --- 
 Method | AGET^[ORWORR](http://code.osehra.org/dox/Routine_ORWORR_source.html)
 Method comment | Get abbrev. event delayed order list for patient
 First comment | {::nomarkdown}returns ^TMP("ORR",$J,ORLIST,n)=IFN^DGrp^ActTm<br/>see input parameters above<br/>-- from ORWORR<br/>-- section uses ORQ1 to get orders list rather than XGET --{:/}
 Input parameters | {::nomarkdown}DFN<br>FILTER<br>GROUPS<br>DTFROM<br>DTTHRU<br>EVENT<br>ORRECIP{:/}
 Code | {::nomarkdown}  N ORLIST,ORIFN,IFN,I,ORWTS,TOT,MULT,ORWARD,TXTVW,ORYD,PTEVTID,EVTNAME<br> S (PTEVTID,EVTNAME)=""<br> K ^TMP("ORR",$J),^TMP("ORRJD",$J)<br> S:'$D(GROUPS) GROUPS=1 S:'$D(FILTER) FILTER=2<br> S ORWTS=+$P(FILTER,U,2),FILTER=+FILTER<br> S MULT=$S("^1^6^8^9^10^11^13^14^20^22^"[(U_FILTER_U):1,1:0)<br> I $L($G(^DPT(DFN,.1))) S ORWARD=1 ; normally ptr to 42<br> S:'$L($G(DTFROM)) DTFROM=0<br> S:'$L($G(DTTHRU)) DTTHRU=0<br> I $P(DTFROM,".")=$P(DTTHRU,"."),$P(DTFROM,".",2)>$P(DTTHRU,".",2),$P(DTTHRU,".",2)="" S $P(DTTHRU,".",2)=2359<br> S:'$L($G(EVENT)) EVENT=0<br> I $G(EVTDCREL)="TRUE" D<br> . D EN^ORQ1(DFN_";DPT(",GROUPS,FILTER,"",DTFROM,DTTHRU,2,MULT,"",1,EVENT)<br> . D GET2^ORWORR1<br> E  D<br> . D EN^ORQ1(DFN_";DPT(",GROUPS,FILTER,"",DTFROM,DTTHRU,0,MULT,"",1,EVENT)<br> . D GET1^ORWORR1{:/}

{::nomarkdown} <br/><br/><p style="font-size: 11px">Generated on January 15th 2017, 12:59:50 am</p>{:/}