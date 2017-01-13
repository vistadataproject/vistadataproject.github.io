---
layout: default
title: VISTA RPC documentation
---



## [RPCs](TableOfContent.md) &#8594; ORQOR LIST 

 property | value 
--- | --- 
 label | {::nomarkdown}ORQOR LIST{:/}
 tag | {::nomarkdown}LIST{:/}
 routine | [ORQOR1](http://code.osehra.org/dox/Routine_ORQOR1_source.html)
 return value type | {::nomarkdown}ARRAY{:/}
 description | {::nomarkdown}Returns a list of patient orders.{:/}


### Method description

 property | value 
 --- | --- 
 Method comment | return list of patient orders
 Input Parameters | {::nomarkdown}PATIENT<br/>GROUP<br/>FLAG<br/>ORSDT<br/>OREDT<br/>ORXREF<br/>GETKID{:/}
 Lines | ```{::nomarkdown} N GIEN S GIEN=""<br/> I $L($G(ORSDT)) D DT^DILF("T",ORSDT,.ORSDT,"","")<br/> I $L($G(OREDT)) D DT^DILF("T",OREDT,.OREDT,"","")<br/> I (ORSDT=-1)!(OREDT=-1) S ORY(1)="^Error in date range." Q<br/> S PATIENT=PATIENT_";DPT("<br/> S:$L($G(GROUP)) GIEN=$O(^ORD(100.98,"B",GROUP,GIEN))<br/> K ^TMP("ORR",$J)<br/> D EN^ORQ1(PATIENT,GIEN,FLAG,"",ORSDT,OREDT,1,0,$G(ORXREF),$G(GETKID))<br/> N J,HOR,SEQ,X S J=1,HOR=0,SEQ=0<br/> S HOR=$O(^TMP("ORR",$J,HOR)) Q:+HOR<1<br/> F  S SEQ=$O(^TMP("ORR",$J,HOR,SEQ)) Q:+SEQ<1  D<br/> .S X=^TMP("ORR",$J,HOR,SEQ)<br/> .S ORY(J)=$P(X,U)_U_$E(^TMP("ORR",$J,HOR,SEQ,"TX",1),1,60)_U_$P(X,U,4)_U_$P(X,U,6),J=J+1<br/> K ^TMP("ORR",$J)<br/> S:+$G(ORY(1))<1 ORY(1)="^No orders found."```{:/}
 Leading comment lines | {::nomarkdown}return PATIENT's orders for a display GROUP of type FLAG<br/>between start (ORSDT) and end dates (OREDT)<br/>dates can be in Fileman or T, T-14 formats{:/}

### Input Parameters

| input parameter | parameter type | maximum data length | required | description | 
| --- | --- | --- | --- | --- | 
| {::nomarkdown}PATIENT{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Patient DFN from Patient file [#2].{:/} | 
| {::nomarkdown}GROUP{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Entry number of the desired display group from the Display Group File [#100.98].{:/} | 
| {::nomarkdown}FLAG{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}Flag identifying the context of the orders to be retreived.{:/} | 
| {::nomarkdown}STARTDATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The startdate for the order search in 'T' or Fileman format.Startdate is only considered when FLAG is '1' (return all orders).{:/} | 
| {::nomarkdown}STOPDATE{:/} | {::nomarkdown}LITERAL{:/} | {::nomarkdown}16{:/} | {::nomarkdown}true{:/} | {::nomarkdown}The stopdate for the order search in 'T' or Fileman format.Stopdate is only considered when FLAG is '1' (return all orders).{:/} | 




 Generated on January 13th 2017, 7:11:26 am